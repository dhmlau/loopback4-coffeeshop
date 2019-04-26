import {repository, Filter, Where, Count} from '@loopback/repository';
import {CoffeeShopRepository} from '../repositories';
import {param, requestBody, post, get, del} from '@loopback/rest';
import {Review} from '../models';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
/**
 * Note:
 * Referencing code from `UserOrderController` in
 * https://github.com/strongloop/loopback4-example-shopping/blob/master/packages/src/controllers/user-order.controller.ts
 */
export class CoffeeShopReviewController {
  constructor(
    @repository(CoffeeShopRepository)
    protected coffeeShopRepo: CoffeeShopRepository,
  ) {}

  /**
   * Create review for a given coffee shop
   * @param coffeeShopId
   * @param review
   */
  @post('/coffee-shops/{coffeeShopId}/review', {
    responses: {
      '200': {
        description: 'CoffeeShop.Review model instance',
        content: {'application/json': {'x-ts-type': Review}},
      },
    },
  })
  async createReview(
    @param.path.number('coffeeShopId') coffeeShopId: number,
    @requestBody() review: Review,
  ): Promise<Review> {
    return await this.coffeeShopRepo.reviews(coffeeShopId).create(review);
  }

  @get('/coffee-shops/{coffeeShopId}/reviews', {
    responses: {
      '200': {
        description: "Array of CoffeeShop's Reviews",
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Review}},
          },
        },
      },
    },
  })
  async findReview(
    @param.path.number('coffeeShopId') coffeeShopId: number,
    @param.query.string('filter') filter?: Filter,
  ): Promise<Review[]> {
    return await this.coffeeShopRepo
      .reviews(coffeeShopId)
      .find(filter, {strictObjectIDCoercion: true});
  }
  @del('/coffee-shops/{coffeeShopId}/reviews', {
    responses: {
      '200': {
        description: 'CoffeeShop.Review DELETE success count',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                count: 'number',
              },
            },
          },
        },
      },
    },
  })
  async deleteReviews(
    @param.path.number('coffeeShopId') coffeeShopId: number,
    @param.path.string('where') where?: Where,
  ): Promise<Count> {
    return await this.coffeeShopRepo
      .reviews(coffeeShopId)
      .delete(where, {strictObjectIDCoercion: true});
  }
}
