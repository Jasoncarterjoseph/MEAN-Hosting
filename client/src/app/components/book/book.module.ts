import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { AppModule } from 'src/app/app.module';
import { CommentTimePipe } from 'src/app/core/pipes/comment-time.pipe';
import { ShortenStringPipe } from 'src/app/core/pipes/shorten-string.pipe';

@NgModule({
  declarations: [
    BookCreateComponent,
    BookDeleteComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookStoreComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookRoutingModule,
    NgxPaginationModule,
    SharedModule,
  ],
  exports: [SearchPipe],
})
export class BookModule {}
