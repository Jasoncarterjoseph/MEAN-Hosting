// Decorators and Lifehooks
import { Component, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// Router
import { Router } from '@angular/router';

// Forms
import { FormControl, FormGroup, Validators } from '@angular/forms';

// RXJS
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Services

import { BsModalService } from 'ngx-bootstrap/modal';

// Models

import { CartService } from 'src/app/core/services/cart.service';
import { HelperService } from 'src/app/core/services/helper.service';
import { Cart } from 'src/app/core/models/cart.model';
import { Book } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart: Cart;
  cartForm: FormGroup;
  changesSub$: Subscription;
  removeModalRef: BsModalRef;
  lastCartState: string;
  lastDeleteId: string;

  paymentRequest!: google.payments.api.PaymentDataRequest;

  constructor(
    private router: Router,
    private cartService: CartService,
    private helperService: HelperService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((res) => {
      this.cart = res.data;
      this.cartForm = this.toFormGroup(this.cart.books);
      this.onChanges();
      

        this.paymentRequest = {
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '17613812255336763067',
            merchantName: 'Demo Only (you will not be charged)',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice:this.cart.totalPrice.toFixed(2),
            currencyCode: 'INR',
            countryCode: 'IN',
          },
        };
      
    });
  }

  ngOnDestroy(): void {
    this.changesSub$.unsubscribe();
  }

  toFormGroup(books: Book[]): FormGroup {
    const group: any = {};

    books.forEach((book) => {
      group[book._id] = new FormControl(book.qty || '', [
        Validators.required,
        Validators.min(1),
        Validators.max(20),
        Validators.pattern('^(0|[1-9][0-9]*)$')
      ]);
    });

    return new FormGroup(group);
  }

  onChanges(): void {
    this.changesSub$ = this.cartForm.valueChanges
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((val) => {
        if (this.lastCartState !== JSON.stringify(val)) {
          this.lastCartState = JSON.stringify(val);
          this.reCalcSum(val);
        }
      });
  }

  openRemoveModal(template: TemplateRef<any>, id: string): void {
    this.lastDeleteId = id;
    this.removeModalRef = this.modalService.show(template, {
      class: 'myModal modal-sm',
    });
  }

  onRemove(): void {
    this.cartService.removeFromCart(this.lastDeleteId).subscribe(() => {
      this.helperService.cartStatus.next('remove');
      this.cart.books = this.cart.books.filter(
        (b) => b._id !== this.lastDeleteId
      );
      this.reCalcSum(this.cartForm.value);
      this.removeModalRef.hide();
    });
  }

  onSubmit(event: Event): void {
    const paymentData = (event as CustomEvent<google.payments.api.PaymentData>).detail;
    if (this.cart.books.length <= 0) {
      return;
    } else {
      this.cartService.checkout(this.cartForm.value).subscribe(() => {
        console.log(paymentData);
        
        this.helperService.cartStatus.next('updateStatus');
        this.router.navigate(['/user/purchaseHistory']);
      });
    }
  }

  reCalcSum(formValues: object): void {
    let price = 0;
    for (const b of this.cart.books) {
      price += b.price * formValues[b._id];
    }

    this.cart.totalPrice = price;
  }

  getControl(id: string) {
    return this.cartForm.get(id);
  }
}