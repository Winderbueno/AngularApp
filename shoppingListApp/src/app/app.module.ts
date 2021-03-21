//#region Angular Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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

//#region Service
import { fakeBackendProvider } from './_shared/fake-backend/fake-backend-authentification';
import { InMemoryDataService } from './_shared/fake-backend/in-memory-data.mock.service';
import { JwtInterceptor } from './_shared/_security/jwt.interceptor';
import { ErrorInterceptor } from './_shared/_security/error.interceptor';
//#endregion

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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
