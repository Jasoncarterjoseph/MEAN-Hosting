import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { CommentComponent } from './comment/comment.component';
import { CommentTimePipe } from 'src/app/core/pipes/comment-time.pipe';
import { ShortenStringPipe } from 'src/app/core/pipes/shorten-string.pipe';

import { GooglePayButtonModule } from '@google-pay/button-angular';

@NgModule({
  declarations: [
    CartComponent,
    BookComponent,
    CommentComponent,
    CommentTimePipe,
    ShortenStringPipe,
  ],
  imports: [GooglePayButtonModule,CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    CartComponent,
    BookComponent,
    CommentComponent,
    CommentTimePipe,
    ShortenStringPipe,
  ],
})
export class SharedModule {}
