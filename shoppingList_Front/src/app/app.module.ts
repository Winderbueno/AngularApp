//#region Angular, Material, RxJS
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//#endregion

//#region App Module
import { LayoutModule } from '@app_layout/layout.module';
import { SharedModule } from '@app_shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
//#endregion

//#region Service
import { appInitializer } from '@app_shared/app.initializer';
import { AccountService } from '@app_account/service/account.service';
//#endregion

//#region Interceptor
import { LoaderInterceptor } from './_shared/http-interceptor/loader.interceptor';
import { JwtInterceptor } from '@app_shared/http-interceptor/jwt.interceptor';
import { ErrorInterceptor } from '@app_shared/http-interceptor/error.interceptor';
//#endregion

//#region Declared Component
import { AppComponent } from './app.component';
//#endregion

@NgModule({
  imports: [
    // Angular, Material Module
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // App Module
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },

    /* Manage HTTP request */
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // Add JWT token if account is connected
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, // Start the loader
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } // Handle errors received from server
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
