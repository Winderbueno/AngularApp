//#region Angular Module
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//#endregion

//#region 3rd Party Module
// None for now
//#endregion

//#region App Module
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@app_shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
//#endregion

//#region Service (Interceptor, DataProvider, Guard...)
import { appInitializer } from '@app_shared/app.initializer';
import { AccountService } from '@app_auth/service/account.service';
import { JwtInterceptor } from '@app_auth/helper/jwt.interceptor';
import { ErrorInterceptor } from '@app_error_mngt/service/error.interceptor';
//#endregion

//#region Declared Component
import { AppComponent } from './app.component';
//#endregion

@NgModule({
  imports: [
    // Angular Module
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

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
