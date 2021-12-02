import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { OfficeCardComponent } from './office-card/office-card.component';
import { MemberOverviewComponent } from './member-overview/member-overview.component';

@NgModule({
  declarations: [OfficeCardComponent, SearchBarComponent, MemberOverviewComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [OfficeCardComponent, SearchBarComponent, MemberOverviewComponent],
  providers: [],
})
export class ComponentsModule {}