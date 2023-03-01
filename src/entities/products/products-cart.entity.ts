import { ChildEntity, OneToMany } from 'typeorm';

import { ImageCart } from '@entities/images';
import { ProductType } from '@models/enum';

import { ProductParentEntity } from './products.entity';

@ChildEntity(ProductType.Cart)
export class ProductCart extends ProductParentEntity {
  @OneToMany(() => ImageCart, (image: ImageCart) => image.imageType)
  image: ImageCart[];
}
