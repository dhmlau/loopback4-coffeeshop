import {Entity, model, property} from '@loopback/repository';
import {Review} from './review.model';
import {Income} from './income.model';

@model()
export class CoffeeShop extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  city?: string;

  reviews?: Review[];

  income: Income;

  constructor(data?: Partial<CoffeeShop>) {
    super(data);
  }
}
