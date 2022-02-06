# Online Book Store

### Description

Book Store is a simple single page application (SPA) that lets you buy, rate and leave your comment for all the books that are available in the store. You can also see all of your purchased books history or create your own favorite books list.

### Tech


* [Angular](https://angular.io) - Platform that makes it easy to build applications with the web

The goal of this project is to show the core concepts of building SPA with ExpressJS and Angular. In this project I've used:

* Wrapped each major feature into a module
* Lazy-loading for most of the modules so the app can start faster
* Preload lazy-loaded modules after the app starts so they can be ready for use as soon as possible
* Shared module for compoennts, directives and pipes that can be imported into any feature module
* Services for each major feature
* Guards to prevent unauthorized users to view routes that require authentication or admin rights
* Interceptors for attaching JWT token to the request headers, showing notifications from the server response and error handling
* Custom directives
* Custom pipes
* TypeScript models
* Reactive forms for handling user input

### Installation


To start the client (port: 4200): open new cmd window (in project root) and run

```sh
$ npm install (if you havent already installed the dependencies)
$ ng serve
```

### Features

- Anonymous users
    - Login/Register
    - View all books
    - View books details, rating and comments

- Authenticated users
    - Buy books
    - Rate books
    - Comment books
    - View user profiles
    - View his own purchases history
    - Create favorite books list
    - Can change his own avatar

- Admin users
    - Add books to the store
    - Edit books
    - Delete books
    - Edit/Delete offensive user comments
    - Block/Unblock user from commenting
    - Change unappropriate user avatars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
