import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OfficeCardComponent } from './office-card/office-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MemberOverviewComponent } from './member-overview/member-overview.component';
import { OfficeDetailsFormComponent } from './office-details-form/office-details-form.component';

@NgModule({
  declarations: [OfficeCardComponent, SearchBarComponent, MemberOverviewComponent, OfficeDetailsFormComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [OfficeCardComponent, SearchBarComponent, MemberOverviewComponent, OfficeDetailsFormComponent],
  providers: [],
})
export class ComponentsModule {}