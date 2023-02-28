import { ProductParentEntity } from './products.entity';
import { ProductCart } from './products-cart.entity';
import { ProductPreview } from './products-preview.entity';

export * from './products-cart.entity';
export * from './products-preview.entity';

export const PRODUCT_ENTITIES = [
  ProductParentEntity,
  //
  ProductPreview,
  ProductCart,
];
