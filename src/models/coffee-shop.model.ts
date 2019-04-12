import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Review} from './review.model';
import {Income} from './income.model';

@model()
export class CoffeeShop extends Entity {
  //Set `generated` to true for auto-id generation
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  // To specify CoffeeShop `hasMany` reviews,
  // use the `@hasMany` decorator
  @hasMany(() => Review, {})
  reviews?: Review[];

  @hasOne(() => Income, {})
  income: Income;

  constructor(data?: Partial<CoffeeShop>) {
    super(data);
  }
}
