# LoopBack4 CoffeeShop

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

![coffee shop](aroma-art-beverage-1251175.jpg)

_Photo Credits: https://www.pexels.com/photo/six-white-ceramic-mugs-1251175/_

_Working in progress_

## CoffeeShop Application Overview

In this CoffeeShop example, there are 3 entities:

- **CoffeeShop**: the main entity of this example
- **Review**: review of a particular coffee shop
- **Income**: income of a particular coffee shop

A coffee shop can have multiple reviews. As illustrated in the diagram below, the `CoffeeShop` model has a `hasMany` model relation with the `Review` model. Besides, the `CoffeeShop` model has only one `Income` instance, thus has a `hasOne` model relation with `Income` model.

![LoopBack4 CoffeeShop models](loopback-coffeeshop-models.png)

## Objectives

In this repo, I'd like to show you how I create this CoffeeShop app step-by-step and add my findings along the way regarding model relations.
This CoffeeShop app is inspired by [CoffeeShop Review app](https://loopback.io/doc/en/lb3/Introducing-the-Coffee-Shop-Reviews-app.html) in LoopBack 3.

## Step 1: Create basic models

Create the `CoffeeShop`, `Review` and `Income` models mentioned above.

1. Scaffold a LoopBack4 application using `lb4 app` command.
   Tips: If you know you're going to accept all default, you can use the `--yes` option, i.e. `lb4 app your-app-name --yes`. It will save you a few keystrokes of accepting the defaults.

2. You can create the models using the `lb4 model` command.
   To save you some time, I've created the corresponding json for the 3 models: [coffeeshop-model.json](coffeeshop-model.json)

## User flow 1: From models > Database

1. Create the models and model relations

- when `lb4 relation` is ready, it should be even easier
- modify `@model` decorator in the [Review](src/models/review.model.ts) and [Income](src/models/income.model.ts) which are documented in https://github.com/strongloop/loopback-next/pull/2448

2. Use `automigrate` feature to create the database

- order of database tables are important. Modify [database migration script](src/migrate.ts).
- run `npm run migrate`

3. Modify [CoffeeShopRepository](src/repositories/coffee-shop.repository.ts) to be able to access the ReviewRepository

4. Create [`CoffeeShopReviewController`](src/controllers/coffee-shop-review-controller.ts)
   This is used to do the CRUD operations for reviews related to the coffee shop.

## User flow 2: From database > models

Use `lb4 discover` to discover the models.

## Running the app

Run `npm start`.
Go to `localhost:3000/explorer`.

1. Create some coffee shops - POST /coffee-shops

```json
{
  "name": "My Toronto shop",
  "city": "Toronto"
}
```

```json
{
  "name": "My NYC shop",
  "city": "New York City"
}
```

To verify it is working, call GET /coffee-shops

```json
[
  {
    "id": 1,
    "name": "My Toronto shop",
    "city": "Toronto"
  },
  {
    "id": 2,
    "name": "My NYC shop",
    "city": "New York City"
  }
]
```

2. Create some reviews for particular shops - POST `/coffee-shops/{coffeeshopId}/review

Specify the `coffeeShopId` as the parameter

For `coffeeShopId` is `1`

```json
{
  "date": "2019-04-26T14:58:15.638Z",
  "rating": 4,
  "comments": "good service"
}
```

For `coffeeShopId` is `2`

```json
{
  "date": "2019-04-26T14:58:15.638Z",
  "rating": 2,
  "comments": "long lineup all the time"
}
```

To verify, call GET /coffee-shops/{coffeeShopId}/reviews
