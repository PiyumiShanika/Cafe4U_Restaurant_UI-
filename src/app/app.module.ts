import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { OffersComponent } from './offers/offers.component';
import { ManageruserComponent } from './manageruser/manageruser.component';
import { ItemcardComponent } from './itemcard/itemcard.component';
import { UseraddComponent } from './useradd/useradd.component';
import { OrderviewComponent } from './orderview/orderview.component';
import { ManageofferComponent } from './manageoffer/manageoffer.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenuItemadminComponent } from './menu-itemadmin/menu-itemadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    ReservationComponent,
    TestimonialComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SidepanelComponent,
    OffersComponent,
    ManageruserComponent,
    ItemcardComponent,
    UseraddComponent,
    OrderviewComponent,
    ManageofferComponent,
    AddofferComponent,
    AddmenuComponent,
    MenuItemadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
