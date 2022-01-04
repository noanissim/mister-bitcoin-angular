import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
// import { AboutComponent } from './pages/about/about.component';

import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { SignupComponent } from './pages/signup/signup.component';
const routes: Routes = [
  {
    path: 'statistics',
    component: StatisticsPageComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'contact/edit/:id',
  //   component: ContactEditComponent,
  //   resolve: { contact: ContactResolverService },
  // },
  // {
  //   path: 'contact/edit',
  //   component: ContactEditComponent,
  //   resolve: { contact: ContactResolverService },
  // },
  // {
  //   path: 'contact/:id',
  //   component: ContactDetailsComponent,
  //   resolve: { contact: ContactResolverService },
  //   canActivate: [AuthGuard],
  // },
  // { path: 'contact', component: ContactAppComponent },
  {
    path: 'contact',
    component: ContactAppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditComponent,
        resolve: { contact: ContactResolverService },
        canActivate: [AuthGuard],
      },
      {
        path: 'edit',
        component: ContactEditComponent,
        resolve: { contact: ContactResolverService },
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        component: ContactDetailsComponent,
        resolve: { contact: ContactResolverService },
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
