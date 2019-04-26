import {Entity, model, property, belongsTo} from '@loopback/repository';
import {CoffeeShop} from './coffee-shop.model';

@model({
  settings: {
    foreignKeys: {
      fk_review_coffeeShopId: {
        name: 'fk_review_coffeeShopId',
        entity: 'CoffeeShop',
        entityKey: 'id',
        foreignKey: 'coffeeShopId',
      },
    },
  },
})
export class Review extends Entity {
  //Set `generated` to true for auto-id generation
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  reviewId: number;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'number',
  })
  rating?: number;

  @property({
    type: 'string',
    required: true,
  })
  comments: string;

  @belongsTo(() => CoffeeShop)
  coffeeShopId: number;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}
