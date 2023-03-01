import { ProductCart } from '@entities/products';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { PRODUCT_CART_FIXTURES } from '../../data/products';

export class ProductCartLoader extends AbstractLoader<ProductCart> {
  entity: new () => ProductCart = ProductCart;

  data: Partial<ProductCart>[] = PRODUCT_CART_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
