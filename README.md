# ShoppingListApp / Front

Orinally generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2<br/>
Then inspired by Jason Watmore's [Angular App Boilerplate](https://jasonwatmore.com/post/2020/08/29/angular-10-boilerplate-email-sign-up-with-verification-authentication-forgot-password)<br/>
Then improved by WnK company

## Business Feature

- Technical Demo (alert, form, loader)
- User Account (login, logout, register, resetPwd)
- [LoggedOnly] / Shopping List (use, modify)

## Technical Solution

- CodeMngt&Doc : VSCode, Git, GitHub, Excel, LucidChart
- Web Framework : [Angular](https://angular.io/docs) (Modules : Router, Http, Animation...)
- Web Component : [Angular Material](https://material.angular.io/components/categories)
- State Mngt & Event Programming : Ngrx RxJS
- CSS Preprocessor : sass en '.scss'
- Back End : .NET Api

## Test & Documentation

- In Progress

# Manage App (with 'npm' & 'angular cli')

Run `ng help` Lists available commands and their short descriptions
For more, see [Angular CLI](https://angular.io/cli) page

## Build & Run

- `ng serve` : Builds and serves app locally, rebuilding on file changes
  - `--open` : To open `http://localhost:4200/` in browser after build
- `ng build --configuration <env>` : Build source files and store builds artifacts in `dist/` dir
  - \<env> : production
- `ng deploy`

## Scaffold Code

- `ng generate <elt> <name>` : Scaffold new angular element based on code template
  - \<elt> : 'component' | 'service' | 'module'...
  - \<name> : element name