import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {CoffeeShop, Review} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {ReviewRepository} from './review.repository';

// See example from https://github.com/strongloop/loopback4-example-shopping/blob/master/src/repositories/user.repository.ts
export class CoffeeShopRepository extends DefaultCrudRepository<
  CoffeeShop,
  typeof CoffeeShop.prototype.id
> {
  //ADD THIS LINE for HasManyRepositoryFactory
  public reviews: HasManyRepositoryFactory<
    Review,
    typeof CoffeeShop.prototype.id
  >;

  // Add the `@repository` decorator of the ReviewRepository from the generated code
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
    @repository(ReviewRepository) protected reviewRepository: ReviewRepository,
  ) {
    super(CoffeeShop, dataSource);

    //ADD THIS LINE
    this.reviews = this.createHasManyRepositoryFactoryFor(
      'reviews',
      async () => reviewRepository,
    );
  }
}
