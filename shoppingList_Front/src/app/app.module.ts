//#region Angular, Material
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
//#endregion

//#region NgRx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
//#endregion

//#region App Module
import { AppRouterModule } from '@app/app-router.module';
import { AlertModule } from '@alert/alert.module';
import { LayoutModule } from '@layout/layout.module';
import { TimerModule } from '@timer/timer.module';
import { TokenModule } from '@token/token.module';
//#endregion

//#region Service
import { appInitializer } from '@app_helper/app.initializer';
import { AccountService } from '@account/service/account.service'; // TODO - Should not be used
//#endregion

//#region Interceptor
import { LoaderInterceptor } from '@app_helper/interceptor/loader.interceptor';
import { JwtInterceptor } from '@app_helper/interceptor/jwt.interceptor';
import { ErrorInterceptor } from '@app_helper/interceptor/error.interceptor';
//#endregion

//#region Component
import { AppComponent } from './app.component';
//#endregion

//#region Store
import * as fromAccount from '@account/store/account.reducers';
//#endregion

//#region App Conf
import { environment } from '../environments/environment';
//#endregion


@NgModule({
  imports: [
    /* Angular */
    BrowserModule, // TODO - Voir a quoi ce module peut servir
    BrowserAnimationsModule,
    HttpClientModule,

    /* App Module */
    AppRouterModule,
    AlertModule,
    LayoutModule,
    TimerModule,
    TokenModule,

    /* Store */
    StoreModule.forRoot({
      router: routerReducer,
      account: fromAccount.reducer, // TODO put in a feature
    }),

    StoreRouterConnectingModule.forRoot(),

    /* Store DevTool */
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    /* Effect */
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },

    /* Material Configuration */
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },

    /* Manage HTTP request */
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // Add JWT token if account is connected
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, // Start the loader
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } // Handle errors received from server
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
