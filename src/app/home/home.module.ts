import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent } from './components';



@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    ParentComponent
  ],
  providers: [
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
