import {DefaultCrudRepository} from '@loopback/repository';
import {Income} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IncomeRepository extends DefaultCrudRepository<
  Income,
  typeof Income.prototype.incomeId
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Income, dataSource);
  }
}
