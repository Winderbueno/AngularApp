//#region Angular, Material, NgRx
import { Injectable } from '@angular/core';
//#endregion


@Injectable({ providedIn: 'root' })
export class StyleLoaderService {

  themePkgNames:string[]=[];

  getCSSPkgNames(document: Document){
    let themeElts:HTMLLinkElement[] = [];

    // Get theme names
    Array.from(document.getElementsByTagName('link'))
      .forEach(elt => {
        if (elt.rel === 'stylesheet' && elt.href.includes('theme_')) {
          this.themePkgNames.push(elt.href);
          themeElts.push(elt);
        }
      });

    // Clean unused theme
    for(let i=1; i<themeElts.length; i++) { themeElts[i].remove() }
  }


  loadStyle(document: Document, themeName: string) {

    let themeElt: HTMLLinkElement;

    Array.from(document.getElementsByTagName('link')).forEach(
      elt => {
        if (elt.rel === 'stylesheet' && elt.href.includes('theme_')) {
          themeElt = elt;
        }
      });

    this.themePkgNames.forEach(elt => {
      if(elt.includes(themeName)) {themeElt.href=elt; return; };
    });
  }
}
