import { ProductCart } from '@entities/products';
import { ProductType } from '@models/enum';

import { pathByName } from './models';

export const PRODUCT_CART_FIXTURES: Partial<ProductCart>[] = [
  {
    id: '48866931-544d-4f54-9825-1fdee26d4225',
    productType: ProductType.Cart,
    path: pathByName('Blue Sweatshirt'),
  },
  {
    id: 'f066c517-7434-4fe5-b215-d0fdd65361e3',
    productType: ProductType.Cart,
    path: pathByName('Slim black T-shirt'),
  },
];
