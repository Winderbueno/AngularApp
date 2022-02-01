//#region Angular, Material, NgRx
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { filter, map, withLatestFrom } from 'rxjs/operators';
//#endregion

//#region Module
import { MaterialThemeEnum } from '@material/enum/theme.enum'
import * as fromForm from '@form/store/';
import { SetValueAction } from 'ngrx-forms';
//#endregion


@Injectable()
export class CSSThemeEffects {

  themePkgNames:string[]=[];
  materialThemeEnumValues: string[] = Object.values(MaterialThemeEnum);

  // On app init, get the name of CSS Theme bundle in HTML Doc  
  getCSSThemeNamesInHTMLDoc$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      withLatestFrom(this.store.select(fromForm.selectFormById('Theme-Menu'))),
      map(([,form]) => {

        let themeElts:HTMLLinkElement[] = [];

        // Get theme names
        Array.from(this.document.getElementsByTagName('link'))
          .forEach(elt => {
            if (elt.rel === 'stylesheet' && elt.href.includes('theme_')) {
              this.themePkgNames.push(elt.href);
              themeElts.push(elt);
            }
          });

        // Clean unused theme
        for(let i=0; i<themeElts.length; i++) { 
          if(form !== undefined && i != form.controls['Theme'].value)
            themeElts[i].remove();
        }
      })
    ), 
    { dispatch: false }
  );

  // When the theme is set in ThemeMenu, Update theme href in HTMLDocument head
  updateCSSThemeInHTMLDoc$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SetValueAction.TYPE),
      filter((action: SetValueAction<fromForm.FormValue>) => action.controlId === 'Theme-Menu.Theme'),
      map((action: SetValueAction<fromForm.FormValue>) => {

        let themeElt: HTMLLinkElement;

        Array.from(this.document.getElementsByTagName('link')).forEach(
          elt => {
            if (elt.rel === 'stylesheet' && elt.href.includes('theme_')) {
              themeElt = elt;
            }
          });

        this.themePkgNames.forEach(elt => {
          if(elt.includes(this.materialThemeEnumValues[action.value as unknown as number])) {
            themeElt.href=elt; return; 
          };
        });
      })
    ), 
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private store: Store,
    @Inject(DOCUMENT) private document: Document,
  ) {}
}
