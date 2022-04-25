# ShoppingListApp / Front

Originally generated with [Angular CLI](https://github.com/angular/angular-cli#angular-cli---the-cli-tool-for-angular) (v11.2.2)<br/>
Then inspired by [Jason Watmore's Angular 10 Boilerplate](https://jasonwatmore.com/post/2020/08/29/angular-10-boilerplate-email-sign-up-with-verification-authentication-forgot-password)<br/>
Then improved by [WnK Company](https://shoppinglistapp-44a01.web.app/home)

## Business Feature

- Technical Demo (alert, form, loader)
- User Account (login, logout, register, resetPwd)
- [LoggedOnly] / Shopping List (use, modify)

## Technical Solution

- CodeMngt&Doc : VSCode, Git, GitHub, Excel, LucidChart
- Technology :
  - Front : 
    [Angular](https://angular.io/docs), 
    [Angular.Material](https://material.angular.io/components/categories), 
    [Ngrx](https://ngrx.io/docs), 
    [Rxjs](https://rxjs.dev/guide/overview), 
    [Sass](https://sass-lang.com/guide)
  - Back : 
    [.NET](https://docs.microsoft.com/en-us/dotnet/core/introduction)
    [EntityFramework](https://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx)
- Back Api : 
    [.NET Api Code]() // TODO

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