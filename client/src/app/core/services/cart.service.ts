import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from './book.service';
import { HelperService } from './helper.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ServerResponse } from '../models/server-response.model';
import { Cart } from '../models/cart.model';

const baseUrl = 'user/cart';
const getCartSizeEndpoint = 'cart/getSize';
const addToCartEndpoint = '/add/';
const removeFromCartEndpoint = '/delete/';
const checkoutEndpoint = '/checkout';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any[]=[];
  purchasedCart:any[]=[];
  historyCart:any[]=[];

  constructor(private http: HttpClient, private bookService:BookService,private helperService:HelperService) { }

  getCartSize(): Observable<ServerResponse<number>> {
    return this.http.get<ServerResponse<number>>(getCartSizeEndpoint);
  }

  getCart(): Observable<ServerResponse<Cart>> {
    return this.http.get<ServerResponse<Cart>>(baseUrl)
      .pipe(
        map(res => {
          res.data.books.map(b => b.qty = 1);
          return res;
        })
      );
  }

  addToCart(id: string): Observable<ServerResponse<Cart>> {
    return this.http.post<ServerResponse<Cart>>(baseUrl + addToCartEndpoint + id, {});
  }

  removeFromCart(id: string): Observable<ServerResponse<Cart>> {
    return this.http.delete<ServerResponse<Cart>>(baseUrl + removeFromCartEndpoint + id);
  }

  checkout(payload: object): Observable<ServerResponse<object>> {
    return this.http.post<ServerResponse<object>>(baseUrl + checkoutEndpoint, payload);
  }
  getPurchaseHistory(userId:string){
    const historyReceipt=this.purchasedCart.map(object=>{
      if(object.userId==userId){
        return object;
      }
    })
  
    return historyReceipt;
    
  }
  
}


