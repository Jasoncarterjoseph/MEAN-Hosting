import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book.model';
import { CartService } from 'src/app/core/services/cart.service';
import { HelperService } from 'src/app/core/services/helper.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input('book') book: Book;
  isBought: boolean;
  bookId: string;

  constructor(
    private cartService: CartService,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    console.log(this.book._id);
  }

  buyBook(): void {
    this.cartService.addToCart(this.book._id).subscribe(
      () => {
        this.helperService.cartStatus.next('add');
        this.isBought = true;
      },
      () => {
        this.isBought = true;
      }
    );
  }
}
