import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenuItemadminComponent } from './menu-itemadmin/menu-itemadmin.component';
import { ManageruserComponent } from './manageruser/manageruser.component';
import { UseraddComponent } from './useradd/useradd.component';
import { OrderviewComponent } from './orderview/orderview.component';
import { OffersComponent } from './offers/offers.component';
import { ManageofferComponent } from './manageoffer/manageoffer.component';
import { AddofferComponent } from './addoffer/addoffer.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'addMenu', component:AddmenuComponent},
  {path: 'menuitems', component:MenuItemadminComponent},
  {path: 'userManage', component:ManageruserComponent},
  {path: 'add-user', component:UseraddComponent},
  {path: 'manage-orders', component:OrderviewComponent},
  {path: 'add-offers', component:AddofferComponent},
  {path: 'add-offers', component:AddofferComponent},
  {path: 'manage-offer', component:ManageofferComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
