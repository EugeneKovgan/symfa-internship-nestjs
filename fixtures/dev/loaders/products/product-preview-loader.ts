import { ProductPreview } from '@entities/products';
import { EnvironmentType } from '@models/enum';

// eslint-disable-next-line no-restricted-imports
import { AbstractLoader, IRelationsOptions } from '../../../abstract-loader';
import { PRODUCT_PREVIEW_FIXTURES } from '../../data/products';

export class ProductPreviewLoader extends AbstractLoader<ProductPreview> {
  entity: new () => ProductPreview = ProductPreview;

  data: Partial<ProductPreview>[] = PRODUCT_PREVIEW_FIXTURES;

  environments: EnvironmentType[] = [EnvironmentType.Development];

  relations: IRelationsOptions[] = [];
}
