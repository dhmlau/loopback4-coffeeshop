import {Entity, model, property} from '@loopback/repository';

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
  })
  month: number;

  @property({
    type: 'number',
    required: true,
  })
  revenue: number;

  constructor(data?: Partial<Income>) {
    super(data);
  }
}
