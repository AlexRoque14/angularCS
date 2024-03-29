import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
  
  url : environment.wsUlr, options: {}

};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
