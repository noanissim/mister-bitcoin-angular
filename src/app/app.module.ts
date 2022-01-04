import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { DateDescPipe } from './pipes/date-desc.pipe';
// import { FilterArrPipe } from './pipes/filter-arr.pipe';
// import { FetchDataPipe } from './pipes/fetch-data.pipe';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    HomepageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactDetailsComponent,
    AppHeaderComponent,
    StatisticsPageComponent,
    ContactEditComponent,
    SignupComponent,
    TransferFundComponent,
    // DateDescPipe,
    // FilterArrPipe,
    // FetchDataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MDBBootstrapModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
