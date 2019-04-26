import {Entity, model, property, belongsTo} from '@loopback/repository';
import {CoffeeShop} from './coffee-shop.model';

@model({
  settings: {
    foreignKeys: {
      fk_review_coffeeShopId: {
        name: 'fk_review_coffeeShopId',
        entity: 'CoffeeShop',
        entityKey: 'id',
        foreignKey: 'coffeeshopid',
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

  // Note:
  // `coffeeShopId` is the default name expected
  // in the format of {model-name-in-camel-case}Id
  // If your column name is something else,
  // use `keyFrom` to specify the database column name
  // See https://loopback.io/doc/en/lb4/BelongsTo-relation.html#defining-a-belongsto-relation
  // TO BE VERIFIED
  // @belongsTo(() => CoffeeShop, {
  //   keyFrom: 'coffeeshopid123',
  //   keyTo: 'id',
  //   name: 'coffeeshop',
  // })

  @belongsTo(() => CoffeeShop)
  coffeeShopId: number;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}
