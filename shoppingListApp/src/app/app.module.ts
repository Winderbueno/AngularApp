//#region Angular Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//#endregion

//#region 3rd Party Module
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//#endregion

//#region App Module
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './_shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
//#endregion

// App Component And Service
import { InMemoryDataService } from './_shared/service/mock/in-memory-data.mock.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // Angular Module
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // 3rd Party Module
    // Intercepts HTTP requests and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    // App Module
    AppRoutingModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
