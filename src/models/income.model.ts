import {Entity, model, property, belongsTo} from '@loopback/repository';
import {CoffeeShop} from './coffee-shop.model';
@model()
export class Income extends Entity {
  //QUESTION: can i make `year` and `month` to be the composite id?
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  incomeId: number;

  @property({
    type: 'number',
    required: true,
  })
  year: number;

  @property({
    type: 'number',
    required: true,
  })
  month: number;

  @property({
    type: 'number',
    required: true,
  })
  revenue: number;

  @belongsTo(() => CoffeeShop)
  coffeeShopId: number;

  constructor(data?: Partial<Income>) {
    super(data);
  }
}
