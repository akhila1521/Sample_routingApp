import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'cart', component:CartComponent},
  {path:'contact', component:ContactComponent},
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'login', component:AdminComponent},
  {path:'error',component:NotFoundErrorComponent,data: {error:404}},
  {path:'**', component:AdminComponent, data: {username:'Akhila', password:'12345789'} }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
