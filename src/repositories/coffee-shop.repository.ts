import {DefaultCrudRepository} from '@loopback/repository';
import {CoffeeShop} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CoffeeShopRepository extends DefaultCrudRepository<
  CoffeeShop,
  typeof CoffeeShop.prototype.id
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(CoffeeShop, dataSource);
  }
}
