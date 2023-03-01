import { ChildEntity, Column, ManyToOne } from 'typeorm';

import { ImageType } from '@models/enum';

import { ProductPreview } from '../products/products-preview.entity';
import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Preview)
export class ImagePreview extends ImageParentEntity {
  // TODO add unique for relation with goods
  @Column({ type: 'tinyint', nullable: true, default: null })
  order: number;

  @ManyToOne(() => ProductPreview, (product: ProductPreview) => product.image)
  product: ProductPreview;
}
