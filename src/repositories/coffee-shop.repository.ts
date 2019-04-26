import {
  DefaultCrudRepository,
  repository,
  HasManyRepositoryFactory,
} from '@loopback/repository';
import {CoffeeShop, Review} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {ReviewRepository} from './review.repository';

/**
 * Note:
 * For the CoffeeShopRepository to know about the model relations with `Review`,
 * we need to do 2 things:
 * 1. Add an `reviews` attribute for its `HasManyRepositoryFactory`.
 * 2. Add the `@repository` decorator of the ReviewRepository in the constructor
 * 3. Create the HasManyRepository factory for review inside the constructor
 * See example from https://github.com/strongloop/loopback4-example-shopping/blob/master/packages/shopping/src/repositories/user.repository.ts
 */
export class CoffeeShopRepository extends DefaultCrudRepository<
  CoffeeShop,
  typeof CoffeeShop.prototype.id
> {
  // Step 1:
  // Add an `reviews` attribute for its `HasManyRepositoryFactory`.
  public reviews: HasManyRepositoryFactory<
    Review,
    typeof CoffeeShop.prototype.id
  >;

  // Step 2:
  // Add the `@repository` decorator of the ReviewRepository in the constructor
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
    @repository(ReviewRepository) protected reviewRepository: ReviewRepository,
  ) {
    super(CoffeeShop, dataSource);

    // Step 3:
    // Create the HasManyRepository factory for review inside the constructor
    this.reviews = this.createHasManyRepositoryFactoryFor(
      'reviews',
      async () => reviewRepository,
    );
  }
}
