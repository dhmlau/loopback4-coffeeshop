# LoopBack4 CoffeeShop

![coffee shop](aroma-art-beverage-1251175.jpg)

_Working in progress_

## CoffeeShop Application Overview

In this CoffeeShop example, there are 3 entities:

- **CoffeeShop**: the main entity of this example
- **Review**: review of a particular coffee shop
- **Income**: income of a particular coffee shop

A coffee shop can have multiple reviews. As illustrated in the diagram below, the `CoffeeShop` model has a `hasMany` model relation with the `Review` model. Besides, the `CoffeeShop` model has only one `Income` instance, thus has a `hasOne` model relation with `Income` model.

![LoopBack4 CoffeeShop models](loopback-coffeeshop-models.png)

## User flow 1: From models > Database

1. Create the models and model relations

- when `lb4 relation` is ready, it should be even easier

2. use `automigrate` feature to create the database

3. Create `CoffeeShopReviewController`
   This is used to do the CRUD operations for reviews related to the coffee shop.

## User flow 2: From database > models

Use `lb4 discover` to discover the models.

## Running the app

Run `npm start`.
Go to `localhost:3000/explorer`.

Create some coffee shops

```json
{
  "name": "My Toronto shop",
  "city": "Toronto"
}
```

Create review

```
{
  "date": "2019-04-12T19:08:37.956Z",
  "rating": 4,
  "comments": "great service",
  "coffeeShopId": 1
}
```

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

Photo Credits: https://www.pexels.com/photo/six-white-ceramic-mugs-1251175/
