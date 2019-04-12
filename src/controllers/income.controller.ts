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
import {Income} from '../models';
import {IncomeRepository} from '../repositories';

export class IncomeController {
  constructor(
    @repository(IncomeRepository)
    public incomeRepository : IncomeRepository,
  ) {}

  @post('/incomes', {
    responses: {
      '200': {
        description: 'Income model instance',
        content: {'application/json': {schema: {'x-ts-type': Income}}},
      },
    },
  })
  async create(@requestBody() income: Income): Promise<Income> {
    return await this.incomeRepository.create(income);
  }

  @get('/incomes/count', {
    responses: {
      '200': {
        description: 'Income model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Income)) where?: Where,
  ): Promise<Count> {
    return await this.incomeRepository.count(where);
  }

  @get('/incomes', {
    responses: {
      '200': {
        description: 'Array of Income model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Income}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Income)) filter?: Filter,
  ): Promise<Income[]> {
    return await this.incomeRepository.find(filter);
  }

  @patch('/incomes', {
    responses: {
      '200': {
        description: 'Income PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() income: Income,
    @param.query.object('where', getWhereSchemaFor(Income)) where?: Where,
  ): Promise<Count> {
    return await this.incomeRepository.updateAll(income, where);
  }

  @get('/incomes/{id}', {
    responses: {
      '200': {
        description: 'Income model instance',
        content: {'application/json': {schema: {'x-ts-type': Income}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Income> {
    return await this.incomeRepository.findById(id);
  }

  @patch('/incomes/{id}', {
    responses: {
      '204': {
        description: 'Income PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() income: Income,
  ): Promise<void> {
    await this.incomeRepository.updateById(id, income);
  }

  @put('/incomes/{id}', {
    responses: {
      '204': {
        description: 'Income PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() income: Income,
  ): Promise<void> {
    await this.incomeRepository.replaceById(id, income);
  }

  @del('/incomes/{id}', {
    responses: {
      '204': {
        description: 'Income DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.incomeRepository.deleteById(id);
  }
}
