import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloModule } from './features/hello/hello.module';
import { WorkshopModule } from './features/workshop/workshop.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HelloModule,
    WorkshopModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
