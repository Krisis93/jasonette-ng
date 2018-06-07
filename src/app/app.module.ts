import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { uselessPipe } from './filter.pipe';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    uselessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAP2S7cTCcAtpUNr3AMwc6Jm5GadIs_Td4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }
