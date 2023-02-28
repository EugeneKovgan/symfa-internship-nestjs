import { ChildEntity, Column } from 'typeorm';

import { ProductType } from '@models/enum';

import { ProductParentEntity } from './products.entity';

@ChildEntity(ProductType.Preview)
export class ProductPreview extends ProductParentEntity {
  // TODO add unique for relation with goods
  @Column({ type: 'tinyint', nullable: true, default: null })
  order: number;
}
