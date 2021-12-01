import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { OfficeInfoComponent } from './pages/office-info/office-info.component';
import { OfficeViewComponent } from './pages/office-view/office-view.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'office',
    component: OfficeViewComponent,
  },
  {
    path: 'edit-office',
    component: OfficeInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
