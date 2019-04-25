import {Entity, model, property} from '@loopback/repository';

@model()
export class Income extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  incomeId?: number;

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

  @property({
    type: 'number',
    required: true,
  })
  coffeeShopId: number;

  constructor(data?: Partial<Income>) {
    super(data);
  }
}
