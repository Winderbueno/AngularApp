//#region Angular Module
import { NgModule, APP_INITIALIZER } from '@angular/core';
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

//#region Service (Interceptor, DataProvider, Guard...)
import { appInitializer } from './_shared/app.initializer';
import { AccountService } from './_shared/service/business/account.service';
import { InMemoryDataService } from './_shared/service/fake-backend/in-memory-data.mock.service';
import { JwtInterceptor } from './_shared/service/interceptor/jwt.interceptor';
import { ErrorInterceptor } from './_shared/service/interceptor/error.interceptor';
//#endregion

//#region Declared Component
import { AppComponent } from './app.component';
//#endregion

@NgModule({
  imports: [
    // Angular Module
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Fake Backend with 3rd Party Module (Intercepts HTTP requests)
    // HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //),

    // App Module
    AppRoutingModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
