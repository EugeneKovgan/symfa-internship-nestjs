import { ProductPreview } from '@entities/products';

import { generateProductPreview } from './models';

export const PRODUCT_PREVIEW_FIXTURES: Partial<ProductPreview>[] = [
  ...generateProductPreview(
    ['437416cd-9a14-420f-a8e1-b3dd4b4688f7', '9dcb3f46-cda6-4bf4-aeb1-be8561d9da1d'],
    'White T-shirt Gucci',
  ),
];
