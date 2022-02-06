import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from 'src/app/core/guards/is-admin.guard';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookStoreComponent } from './book-store/book-store.component';

const bookRoutes: Routes = [
  {
    path: '',
    redirectTo: 'store/default',
    pathMatch: 'full',
  },
  {
    path: 'store/:query',
    component: BookStoreComponent,
  },
  {
    path: 'details/:bookId',
    component: BookDetailsComponent,
  },
  {
    path: 'create',
    canActivate: [IsAdminGuard],
    component: BookCreateComponent,
  },
  {
    path: 'edit/:bookId',
    canActivate: [IsAdminGuard],
    component: BookEditComponent,
  },
  {
    path: 'delete/:bookId',
    canActivate: [IsAdminGuard],
    component: BookDeleteComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(bookRoutes)],
    exports: [RouterModule]
  })

export class BookRoutingModule {}
