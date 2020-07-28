# small-ecom

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Project Description

This project is the front-end component to a small-ecommerce log in/sign up system; indepdenant of its [back-end](https://github.com/shahd-s/backend). The system consists of two end users, admins and customers who are able to log in and sign up. An admin has the ability to change the status of regular users (customers, etc) to active/inactive. An admin also has the ability to view a list of all orders of all regular users signed up in the system. A customer/regular user only has the ability to view her/his/their own orders and status. They cannot change their own statuses. I have manually added some products and orders in order in code for better visualization pruposes. As it stands there are two items, a brush...and pencil? To run, simply start up the back-end, and ng serve in the root directory here in small-ecom. 

## Project Structure

This project is routed accross three (or maybe four I don't know how to count) pages. A login/sign up component, an admin home component, a regular user component, and an invalid component. A service accesses the backend (at localhost 5001) for get and post requests in order to achieve the requirements stated in the previous heading.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
