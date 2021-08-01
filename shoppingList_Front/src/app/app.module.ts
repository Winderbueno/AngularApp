//#region Angular, Material, RxJS, NgRx
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
//#endregion

//#region App Module
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@app_layout/layout.module';
import { SharedModule } from '@app_shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
//#endregion

//#region Service
import { appInitializer } from '@app_shared/app.initializer';
import { AccountService } from '@app_account/service/account.service';
//#endregion

//#region Interceptor
import { LoaderInterceptor } from '@app_shared/interceptor/loader.interceptor';
import { JwtInterceptor } from '@app_shared/interceptor/jwt.interceptor';
import { ErrorInterceptor } from '@app_shared/interceptor/error.interceptor';
//#endregion

//#region Declared Component
import { AppComponent } from './app.component';
//#endregion

// Material Configuration
const appearance: MatFormFieldDefaultOptions = { appearance: 'outline' };

@NgModule({
  imports: [
    // Angular, Material
    BrowserModule, // TODO - Voir a quoi ce module peut servir
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),

    // App Module
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    ShoppingListModule,
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },

    /* Material Configuration */
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: appearance },

    /* Manage HTTP request */
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // Add JWT token if account is connected
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, // Start the loader
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } // Handle errors received from server
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
