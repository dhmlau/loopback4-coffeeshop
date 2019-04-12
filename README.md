# LoopBack4 CoffeeShop

![coffee shop](aroma-art-beverage-1251175.jpg)

_Working in progress_

## User flow 1: From models > Database

1. Create the models

- when `lb4 relation` is ready, it should be even easier

2. use `automigrate` feature to create the database
3. update the database with the foreign key information

- Question: there might be ways that I don't need to update the database manually?

4. Update the CoffeeShopRepository

5. Create `CoffeeShopReviewController`
   This is used to do the CRUD operations for reviews related to the coffee shop.

## What I want to show in this LB4 app

1. How to use model relations (`hasMany`, `belongsTo` and `hasOne` for now) and set up the corresponding database tables
2. How to do customization

![LoopBack4 CoffeeShop models](loopback-coffeeshop-models.png)

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
