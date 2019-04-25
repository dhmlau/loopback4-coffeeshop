import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CoffeeShop} from '../models';
import {CoffeeShopRepository} from '../repositories';

export class CoffeeShopController {
  constructor(
    @repository(CoffeeShopRepository)
    public coffeeShopRepository : CoffeeShopRepository,
  ) {}

  @post('/coffee-shops', {
    responses: {
      '200': {
        description: 'CoffeeShop model instance',
        content: {'application/json': {schema: {'x-ts-type': CoffeeShop}}},
      },
    },
  })
  async create(@requestBody() coffeeShop: CoffeeShop): Promise<CoffeeShop> {
    return await this.coffeeShopRepository.create(coffeeShop);
  }

  @get('/coffee-shops/count', {
    responses: {
      '200': {
        description: 'CoffeeShop model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CoffeeShop)) where?: Where,
  ): Promise<Count> {
    return await this.coffeeShopRepository.count(where);
  }

  @get('/coffee-shops', {
    responses: {
      '200': {
        description: 'Array of CoffeeShop model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CoffeeShop}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CoffeeShop)) filter?: Filter,
  ): Promise<CoffeeShop[]> {
    return await this.coffeeShopRepository.find(filter);
  }

  @patch('/coffee-shops', {
    responses: {
      '200': {
        description: 'CoffeeShop PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() coffeeShop: CoffeeShop,
    @param.query.object('where', getWhereSchemaFor(CoffeeShop)) where?: Where,
  ): Promise<Count> {
    return await this.coffeeShopRepository.updateAll(coffeeShop, where);
  }

  @get('/coffee-shops/{id}', {
    responses: {
      '200': {
        description: 'CoffeeShop model instance',
        content: {'application/json': {schema: {'x-ts-type': CoffeeShop}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<CoffeeShop> {
    return await this.coffeeShopRepository.findById(id);
  }

  @patch('/coffee-shops/{id}', {
    responses: {
      '204': {
        description: 'CoffeeShop PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() coffeeShop: CoffeeShop,
  ): Promise<void> {
    await this.coffeeShopRepository.updateById(id, coffeeShop);
  }

  @put('/coffee-shops/{id}', {
    responses: {
      '204': {
        description: 'CoffeeShop PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() coffeeShop: CoffeeShop,
  ): Promise<void> {
    await this.coffeeShopRepository.replaceById(id, coffeeShop);
  }

  @del('/coffee-shops/{id}', {
    responses: {
      '204': {
        description: 'CoffeeShop DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.coffeeShopRepository.deleteById(id);
  }
}
