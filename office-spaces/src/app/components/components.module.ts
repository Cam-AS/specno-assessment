import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { OfficeCardComponent } from './office-card/office-card.component';
import { MemberOverviewComponent } from './member-overview/member-overview.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [OfficeCardComponent, SearchBarComponent, MemberOverviewComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [OfficeCardComponent, SearchBarComponent, MemberOverviewComponent, LoadingComponent],
  providers: [],
})
export class ComponentsModule {}