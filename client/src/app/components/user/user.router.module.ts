
// Decorators
import { NgModule } from '@angular/core';

// Modules
import { RouterModule, Routes } from '@angular/router';
import { IsAnonymousGuard } from 'src/app/core/guards/is-anonymous.guard';
import { IsAuthenticatedGuard } from 'src/app/core/guards/is-authenticated.guard';
import { CartComponent } from '../shared/cart/cart.component';


// Components
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ReceiptsComponent } from './receipts/receipts/receipts.component';
import { RegisterComponent } from './register/register.component';



const userRoutes: Routes=[
    {
        path:"",
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'profile/:username',
        canActivate: [IsAuthenticatedGuard],
        component:ProfileComponent
    },
    {
        path:'purchaseHistory',
        canActivate: [IsAuthenticatedGuard],
        component:ReceiptsComponent
    },
    {
        path:'cart',
        canActivate: [IsAuthenticatedGuard],
        component:CartComponent
    },
    {
        path:'login',
        canActivate: [IsAnonymousGuard],
        component:LoginComponent
    },
    {
        path:'register',
        canActivate: [IsAnonymousGuard],
        component:RegisterComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(userRoutes)],
    exports:[RouterModule]
})

export class UserRoutingModule{}