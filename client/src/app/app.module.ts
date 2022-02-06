import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/landing/home/home/home.component';
import { MyCommonModule } from './components/common/my-common.module';
import { HeaderComponent } from './components/common/header/header.component';
import { SharedModule } from './components/shared/shared.module';
import { SearchPipe } from './core/pipes/search.pipe';
import { IsIsbnDirective } from './core/directives/is-isbn.directive';
import { IsUrlDirective } from './core/directives/is-url.directive';
import { MustMatchDirective } from './core/directives/must-match.directive';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { SuccessInterceptor } from './core/interceptors/success.interceptor';
import { CommentTimePipe } from './core/pipes/comment-time.pipe';
import { ShortenStringPipe } from './core/pipes/shorten-string.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IsIsbnDirective,
    IsUrlDirective,
    MustMatchDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      newestOnTop: false
    }),
    ModalModule.forRoot(),
    MyCommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
   
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SuccessInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
