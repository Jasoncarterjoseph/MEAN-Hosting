import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ReceiptsComponent } from './receipts/receipts/receipts.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user.router.module';
import { MyCommonModule } from '../common/my-common.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    ReceiptsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MyCommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
