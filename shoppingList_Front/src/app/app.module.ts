//#region Angular, Material, NgRx
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
//#endregion

//#region NgRx Module
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
//#endregion

//#region NgRx Effect & Reducer
import * as fromAccount from '@app_account/_store/account.reducers';
import * as fromShoppingList from '@app_shoppingList/_store/shopping-list.reducers';
//#endregion

//#region App Module
import { AppEffectsModule } from '@app_effect/app-effect.module';
import { AppRouterModule } from '@app/app-router.module';
import { AlertModule } from '@app_alert/alert.module';
import { LayoutModule } from '@app_layout/layout.module';
import { TimerModule } from '@app_timer/timer.module';
//#endregion

//#region Service
import { appInitializer } from '@app_helper/app.initializer';
import { AccountService } from '@app_service/account.service';
//#endregion

//#region Interceptor
import { LoaderInterceptor } from '@app_helper/interceptor/loader.interceptor';
import { JwtInterceptor } from '@app_helper/interceptor/jwt.interceptor';
import { ErrorInterceptor } from '@app_helper/interceptor/error.interceptor';
//#endregion

//#region App Conf
import { environment } from '../environments/environment';
//#endregion

//#region Component
import { AppComponent } from './app.component';
//#endregion

// Material Configuration
const appearance: MatFormFieldDefaultOptions = { appearance: 'outline' };


@NgModule({
  imports: [
    /* Angular */
    BrowserModule, // TODO - Voir a quoi ce module peut servir
    BrowserAnimationsModule,
    HttpClientModule,

    /* NgRx */
    StoreModule.forRoot({
      router: routerReducer,
      account: fromAccount.reducer,
      shoppingList: fromShoppingList.reducer
    }),

    StoreRouterConnectingModule.forRoot(),

    /* NgRx Effect */
    EffectsModule.forRoot([]),

    /* App Module */
    AppEffectsModule,
    AppRouterModule,
    TimerModule,
    AlertModule,
    LayoutModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
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
