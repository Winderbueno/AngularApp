# ShoppingListApp / Front

Originally generated with [Angular CLI](https://github.com/angular/angular-cli#angular-cli---the-cli-tool-for-angular) (v11.2.2)<br/>
Then inspired by [Jason Watmore's Angular 10 Boilerplate](https://jasonwatmore.com/post/2020/08/29/angular-10-boilerplate-email-sign-up-with-verification-authentication-forgot-password)<br/>
Then improved by [WnK Company](https://shoppinglistapp-44a01.web.app/home)

This app rely on a Back End Api to fully operate : [.NET Api Code](https://github.com/Winderbueno/DotNetApi)

## Business Feature

- Technical Demo (alert, form, loader)
- User Account (login, logout, register, resetPwd)
- [LoggedOnly] / Shopping List (use, modify)

## Technology

- Web Framework. [Angular](https://angular.io/docs), 
- Web Component.  [Angular.Material](https://material.angular.io/components/categories), 
- State Management.  [Ngrx](https://ngrx.io/docs), 
- Reactive Programming. [Rxjs](https://rxjs.dev/guide/overview), 
- CSS Preprocessor.  [Sass](https://sass-lang.com/guide)

Detailed infos available in documentation. 

## Documentation

- In Progress

## Test

# App Lifecycle

App lifecycle can be managed with 'angular cli' & 'npm'.
Run `ng help` to list all cli available commands and their short descriptions
For more, see [Angular CLI](https://angular.io/cli) page

## Build & Run

- `npm install` 
- `ng serve --open` Builds & serves app, then open `http://localhost:4200/` in browser (Rebuilding on file changes)
- `ng build --configuration production` Builds app for prod (Stores builds artifacts in `dist/` dir)
- `ng deploy` Deploy apps on configured hosting service (firebase)

## Scaffold Code

- `ng generate <elt> <name>` Scaffold new angular element based on schematic
  - \<elt> : 'component' | 'service' | 'module'...
  - \<name> : element name