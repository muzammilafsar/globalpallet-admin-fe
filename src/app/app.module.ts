import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { CountdownTimerModule } from 'ngx-countdown-timer';

import { ProductService } from './product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from "./auth.guard";
import { AuthInterceptor } from "./auth-interceptor";

import { AppComponent } from './app.component';
import { ProductlistComponent } from './components/productlist/list.component';
import { CreateproductComponent } from './components/createproducts/createp.component';
import { EditProductsComponent } from './components/edit-products/edit.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { CuponsComponent } from './components/coupons/cupons.component';
import { NewcouponComponent } from './components/newcoupon/newcoupon.component';
import { ActiveOrdersComponent } from './components/active-orders/active-orders.component';
import { CustomerContactComponent } from './components/customer-contact/customer-contact.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CarouselsComponent } from './components/carousels/carousels.component';
import { EditCarouselComponent } from './components/edit-carousel/edit-carousel.component';
import { CreateCarouselComponent } from './components/create-carousel/create-carousel.component';
import { OffersComponent } from './components/offers/offers.component';
import { CreateOfferComponent } from './components/create-offer/create-offer.component';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { CategoryComponent } from './components/category/category.component';
import { CreatecategoryComponent } from './components/createcategory/createcat.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { PartOrdersComponent } from './components/party-orders/part-orders.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreatelocalityComponent } from './components/createlocality/createlocality.component';
import { LocalitylistComponent } from './components/localitylist/localitylist.component';
import { LoginComponent } from './components/login/login.component';
import { ExploreComponent } from './components/explore/explore.component';
import { EditExploreComponent } from './components/edit-explore/edit-explore.component';
import { EditLocalityComponent } from './components/edit-locality/edit-locality.component';
import { EditCouponComponent } from './components/edit-coupon/edit-coupon.component';
import { OtphistoryComponent } from './components/otphistory/otphistory.component';
import { UserdeletedaddressComponent } from './components/userdeletedaddress/userdeletedaddress.component';
import { DailyreportComponent } from './components/dailyreport/dailyreport.component';
import { BusinessreportComponent } from './components/businessreport/businessreport.component';
import { AssignedOrdersComponent } from './components/assigned-orders/assigned-orders.component';
import { AssignDeliveryComponent } from './components/assign-delivery/assign-delivery.component';
import { BoysDataComponent } from './components/boys-data/boys-data.component';
import { AppInstallComponent } from './components/app-install/app-install.component';
import { ConstantsComponent } from './components/constants/constants.component';
import { EditConstantsComponent } from './components/edit-constants/edit-constants.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { DeliveryBoysComponent } from './components/delivery-boys/delivery-boys.component';
import { EditDeliveryboysComponent } from './components/edit-deliveryboys/edit-deliveryboys.component';
import { CreateDeliveryboysComponent } from './components/create-deliveryboys/create-deliveryboys.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditActiveordersComponent } from './components/edit-activeorders/edit-activeorders.component';
import { MainsComponent } from './components/mains/mains.component';



const routes: Routes = [
  {path: 'list', component: ProductlistComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createlocality', component: CreatelocalityComponent, canActivate: [AuthGuard] },
  {path: 'localitylist', component: LocalitylistComponent, canActivate: [AuthGuard]},
  {path: 'createp', component: CreateproductComponent, canActivate: [AuthGuard] },
  {path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
  {path: 'newoffers', component: CreateOfferComponent, canActivate: [AuthGuard] },
  {path: 'coupons', component: CuponsComponent},
  {path: 'newcoupons', component: NewcouponComponent},
  {path: 'orderlist', component: OrderlistComponent, canActivate: [AuthGuard] },
  {path: 'activeorders', component: ActiveOrdersComponent, canActivate: [AuthGuard] },
  {path: 'customerlist', component: CustomerlistComponent, canActivate: [AuthGuard] },
  {path: 'customercontact', component: CustomerContactComponent},
  {path: 'carousels', component: CarouselsComponent, canActivate: [AuthGuard]},
  {path: 'dailyreport', component: DailyreportComponent, canActivate: [AuthGuard] },
  {path: 'businessreport', component: BusinessreportComponent, canActivate: [AuthGuard] },
  {path: 'otphistory', component: OtphistoryComponent, canActivate: [AuthGuard] },
  {path: 'deletedaddress', component: UserdeletedaddressComponent, canActivate: [AuthGuard] },
  {path: 'categorylist', component: CategoryComponent, canActivate: [AuthGuard] },
  {path: 'createcat', component: CreatecategoryComponent, canActivate: [AuthGuard] },
  {path: 'createcarousels', component: CreateCarouselComponent, canActivate: [AuthGuard] },
  {path: 'boysdata', component: BoysDataComponent, canActivate: [AuthGuard] },
  {path: 'apphistory', component: AppInstallComponent, canActivate: [AuthGuard] },
  {path: 'feedbacks', component: FeedbacksComponent, canActivate: [AuthGuard] },
  {path: 'constantslist', component: ConstantsComponent, canActivate: [AuthGuard] },
  {path: 'deliveryboyslist', component: DeliveryBoysComponent, canActivate: [AuthGuard] },
  {path: 'adddeliveryboys', component: CreateDeliveryboysComponent, canActivate: [AuthGuard] },
  {path: 'mains', component: MainsComponent, canActivate: [AuthGuard] },
  // {path: 'assign', component: AssignDeliveryComponent, canActivate: [AuthGuard] },   
  {path: 'partyorders', component: PartOrdersComponent},
  {path: 'editorder/:id', component: EditActiveordersComponent, canActivate: [AuthGuard]},
  {path: 'edituser/:id', component: EditUserComponent, canActivate: [AuthGuard] },
  {path: 'editdeliveryboy/:id', component: EditDeliveryboysComponent, canActivate: [AuthGuard] },
  {path: 'editcategory/:id', component: EditCategoryComponent, canActivate: [AuthGuard] },
  {path: 'editcoupon/:id', component: EditCouponComponent, canActivate: [AuthGuard] },
  {path: 'editlocality/:id', component: EditLocalityComponent, canActivate: [AuthGuard] },
  {path: 'editoffers/:id', component: EditOfferComponent, canActivate: [AuthGuard] },
  {path: 'editcarousels/:id', component: EditCarouselComponent, canActivate: [AuthGuard] },
  {path: 'edit/:id', component: EditProductsComponent, canActivate: [AuthGuard] },
  {path: 'editconstants/:id', component: EditConstantsComponent, canActivate: [AuthGuard] },
  {path: 'explorelist', component: ExploreComponent, canActivate: [AuthGuard]},
  {path: 'assignedorders', component: AssignedOrdersComponent, canActivate: [AuthGuard]},
  {path: 'editexplore/:id', component: EditExploreComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'mains', pathMatch: 'full', canActivate: [AuthGuard] },

];


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CreateproductComponent,
    EditProductsComponent,
    SidenavComponent,
    NavbarComponent,
    OrderlistComponent,
    CustomerlistComponent,
    CuponsComponent,
    NewcouponComponent,
    ActiveOrdersComponent,
    AssignedOrdersComponent,
    CustomerContactComponent,
    CountdownComponent,
    CarouselsComponent,
    EditCarouselComponent,
    CreateCarouselComponent,
    OffersComponent,
    CreateOfferComponent,
    EditOfferComponent,
    CategoryComponent,
    CreatecategoryComponent,
    EditCategoryComponent,
    PartOrdersComponent,
    EditUserComponent,
    CreatelocalityComponent,
    LocalitylistComponent,
    LoginComponent,
    ExploreComponent,
    EditExploreComponent,
    EditLocalityComponent,
    EditCouponComponent,
    OtphistoryComponent,
    UserdeletedaddressComponent,
    DailyreportComponent,
    BusinessreportComponent,
    AssignDeliveryComponent,
    BoysDataComponent,
    AppInstallComponent,
    ConstantsComponent,
    EditConstantsComponent,
    FeedbacksComponent,
    DeliveryBoysComponent,
    EditDeliveryboysComponent,
    CreateDeliveryboysComponent,
    EditActiveordersComponent,
    MainsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownTimerModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ProductService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
