import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { model } from 'mongoose';
import { HomeComponent } from './components/landing/home/home/home.component';
import { LoginComponent } from './components/user/login/login/login.component';


const routes: Routes = [
  {
    path: 'user',
    loadChildren:()=>import('./components/user/user.module').then(mod=>mod.UserModule)
  },
  {
    path:"book",
    loadChildren:()=>import('./components/book/book.module').then(m=>m.BookModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
