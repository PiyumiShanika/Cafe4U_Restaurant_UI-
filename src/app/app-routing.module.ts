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
import { AboutComponent } from './about/about.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'addMenu', component:AddmenuComponent},
  {path: 'dashboard/menuitems', component:MenuItemadminComponent},
  {path: 'dashboard/userManage', component:ManageruserComponent},
  {path: 'add-user', component:UseraddComponent},
  {path: 'dashboard/manage-orders', component:OrderviewComponent},
  {path: 'add-offers', component:AddofferComponent},
  {path: 'add-offers', component:AddofferComponent},
  {path: 'dashboard/manage-offer', component:ManageofferComponent},
  {path: 'about', component:AboutComponent},
  {path: 'offers', component:OffersComponent},
  {path: 'dashboard', component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
