/* Component */
import { AppLogoComponent } from './app-logo/app-logo.component';
import { DeskTopComponents } from './_desktop';
import { Menus } from './menu';
import { MobileComponents } from './_mobile';

export const Components = [
  AppLogoComponent,
  ...DeskTopComponents,
  ...Menus,
  ...MobileComponents
];
