import { Column, Entity, TableInheritance, Unique } from 'typeorm';

// import { ImageCart, ImagePreview } from '@entities/images';
import { ProductType } from '@models/enum';

import { BaseEntity } from '../common';

@Entity('products')
@Unique(['path'])
@TableInheritance({
  column: { type: 'enum', enum: ProductType, name: 'productType' },
})
export abstract class ProductParentEntity extends BaseEntity {
  @Column({ type: 'enum', name: 'product_type', enum: ProductType, select: false })
  productType: ProductType;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  path: string;
}
