## WebStore.angular-asp.net.project

Project in process.

## Asp.net project with SQL-SERVER DB:
- right now only local with SQLQuerySQL-SERVER.sql file to build tables - i need to add users table and for track users orders and wishlist table to(with relationship).
## Controllers:
- im only did the product controller.
  - TODO:
  1. users controller: - login option. - add new user.
  2. cart controller: - add more product to specific user.
  3. orders controller: - with relationship between users/cart.
  
## DB.class:
- class that include whole the command to the DB server (sql server).
 - TODO:
 1. whole method for other controllers.
 
## Model (model folder):
- Only did the product.cs file.
  - TODO:
 1. cart.cs.
 2. orders.cs.
 
## Angular:
- Using angular 6+ (lastes verstion).
- Learning Angular from udemy course (Maximilian Schwarzmüller).
- Im try to build it as readable and orderly as i could. Responsive web app using css3 layout(flexbox, grid) and media query.
- The 'client side' is build and translate the data into a category and sub category not matter how match there is. and its need alot of work but i thinks i got somthing to show and learn from it. (also im only got written directly data, still not get method from the server).

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).








