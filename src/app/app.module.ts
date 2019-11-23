import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeModule, ParamInterceptor, NotificationInterceptor } from './home';

import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { CategoryModule } from './category';
import { ChatModule } from './chat';
import { ProductModule } from './product';

import localZh from '@angular/common/locales/zh-Hans';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    HomeModule,
    RecommendModule,
    MyModule,
    CategoryModule,
    ChatModule,
    ProductModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
