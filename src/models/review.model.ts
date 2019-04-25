import {Entity, model, property} from '@loopback/repository';

@model()
export class Review extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  reviewId?: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
  })
  rating?: number;

  @property({
    type: 'string',
  })
  comments?: string;

  @property({
    type: 'number',
    required: true,
  })
  coffeeShopId: number;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}
