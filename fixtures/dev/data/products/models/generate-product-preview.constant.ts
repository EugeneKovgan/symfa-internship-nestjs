import { ProductPreview } from '@entities/products';
import { ProductType } from '@models/enum';

import { pathByName } from './path-by-name.constant';

export const generateProductPreview = (uuids: string[], title: string): ReadonlyArray<Partial<ProductPreview>> =>
  uuids.map((id: string, index: number) => ({
    id,
    order: index,
    ProductType: ProductType.Preview,
    path: pathByName(`${title}-${index + 1}`),
  }));
