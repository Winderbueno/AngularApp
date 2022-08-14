//#region Angular
import { enableProdMode, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//#endregion

//#region NgRx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
//#endregion

//#region Module
import { CoreRouterModule } from './router.module';
import { AlertModule } from '@alert/alert.module';
import { DialogModule } from '@dialog/dialog.module';
import { EnumModule } from '@enum/enum.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormModule } from '@form/form.module';
import { MaterialModule } from '@material/material.module';
import { TimerModule } from '@timer/timer.module';
import { TokenModule } from '@token/token.module';
//#endregion

//#region Feature
import { AccountModule } from '@account/account.module';
import { DemoModule } from '@demo/demo.module';
import { EnterpriseModule } from '@enterprise/enterprise.module';
//#endregion

//#region Interceptor
import { LoaderInterceptor } from '@core/interceptor/loader.interceptor';
import { JwtInterceptor } from '@core/interceptor/jwt.interceptor';
import { ErrorInterceptor } from '@core/interceptor/error.interceptor';
//#endregion

//#region This
import * as Components from './component';
import * as Effects from './effect';
import * as Pages from './page';
import * as fromStore from './store';
//#endregion

//#region ??? TODO
import { AccountAPIEffects } from '@account/effect';
import { EnumAPIEffects } from '@enum/effect';
//#endregion

//#region Configuration
import { environment } from '@env/environment';
let devConf = [StoreDevtoolsModule.instrument({ maxAge: 50 })];
if(environment.production) { devConf = []; enableProdMode() }
//#endregion


@NgModule({
  imports: [
    /* Angular */
    BrowserModule, // TODO - Voir a quoi ce module peut servir
    BrowserAnimationsModule,
    HttpClientModule,

    /* Module */
    CoreRouterModule,
    AlertModule,
    DialogModule,
    EnumModule,
    FlexLayoutModule,
    FormModule,
    MaterialModule,
    TimerModule,
    TokenModule,

    /* Feature */
    AccountModule,
    DemoModule,
    EnterpriseModule,

    /* Store */
    StoreModule.forRoot({
      router: routerReducer,
      core: fromStore.reducer
    },{
      metaReducers:[fromStore.localStorageSyncReducer]
    }),

    StoreRouterConnectingModule.forRoot(),    

    /* Effect */
    EffectsModule.forRoot([
      ...Effects.Effects,
      AccountAPIEffects, // TODO - Should be in Account Feature ?
      EnumAPIEffects, // TODO - Should be in Enum Module ?
    ]),

    /* Dev Only */
    ...devConf
  ],
  providers: [
    /* Manage HTTP request */
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // Add JWT token if account is connected
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, // Start the loader
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true } // Handle errors received from server
  ],
  declarations: [
    Pages.HomePage,
    Components.Components
  ],
  bootstrap: [
    Pages.HomePage
  ]
})
export class CoreModule { }
