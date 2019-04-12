import {DefaultCrudRepository} from '@loopback/repository';
import {Review} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReviewRepository extends DefaultCrudRepository<
  Review,
  typeof Review.prototype.reviewId
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Review, dataSource);
  }
}
