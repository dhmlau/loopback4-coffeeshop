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
  // Note: By default, the expected foreign key name is {model-name}+Id
  // in camel case, i.e. `coffeeShopId` in this case.
  // If you want to specify a different name in the database,
  // use `{keyTo: 'new-fk-name'}`.
  // As a result, it would look like:
  // @hasMany(() => Review, {keyTo: 'new-foreign-key-name'})
  @hasMany(() => Review)
  reviews?: Review[];

  @hasOne(() => Income, {})
  income: Income;

  constructor(data?: Partial<CoffeeShop>) {
    super(data);
  }
}
