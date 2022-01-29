//#region Angular
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//#endregion

//#region NgRx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
//#endregion

//#region Module
import { AppRouterModule } from '@app/app-router.module';
import { AlertModule } from '@alert/alert.module';
import { EnumModule } from '@enum/enum.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@material/material.module';
import { TimerModule } from '@timer/timer.module';
import { TokenModule } from '@token/token.module';
//#endregion

//#region Feature
import { AccountModule } from '@account/account.module';
import { DemoModule } from '@demo/demo.module';
//#endregion

//#region Interceptor
import { LoaderInterceptor } from '@app/interceptor/loader.interceptor';
import { JwtInterceptor } from '@app/interceptor/jwt.interceptor';
import { ErrorInterceptor } from '@app/interceptor/error.interceptor';
//#endregion

//#region Component
import { 
  FooterComponent,
  RootComponent,
  ToolbarComponent } from './component/';
//#endregion

//#region Store
import * as fromStore from './store/';
//#endregion

//#region Effect
import {
  AccountEffects,
  EnumEffects } from './effect/';
import { AccountAPIEffects } from '@account/effect';
import { EnumAPIEffects } from '@enum/effect';
//#endregion

//#region App Conf
import { environment } from '@env/environment';
//#endregion

//#region Meta-Reducer
const metaReducers: Array<MetaReducer<any, any>> = [
  fromStore.localStorageSyncReducer
];
//#endregion


@NgModule({
  imports: [
    /* Angular */
    BrowserModule, // TODO - Voir a quoi ce module peut servir
    BrowserAnimationsModule,
    HttpClientModule,

    /* Module */
    AppRouterModule,
    AlertModule,
    EnumModule,
    FlexLayoutModule,
    MaterialModule,
    TimerModule,
    TokenModule,

    /* Feature */
    AccountModule,
    DemoModule,

    /* Store */
    StoreModule.forRoot({
      router: routerReducer,
    },{
      metaReducers
    }),

    StoreRouterConnectingModule.forRoot(),

    /* Store DevTool */
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    /* Effect */
    EffectsModule.forRoot([
      AccountEffects,
      EnumEffects,
      AccountAPIEffects, // TODO - Should be in Account Feature ?
      EnumAPIEffects, // TODO - Should be in Enum Module ?
    ]),
  ],
  providers: [
    /* Manage HTTP request */
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // Add JWT token if account is connected
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, // Start the loader
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } // Handle errors received from server
  ],
  declarations: [
    FooterComponent,
    RootComponent,
    ToolbarComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
