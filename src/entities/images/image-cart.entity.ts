import { ChildEntity, ManyToOne } from 'typeorm';

import { ProductCart } from '@entities/products/products-cart.entity';
import { ImageType } from '@models/enum';

import { ImageParentEntity } from './image.entity';

@ChildEntity(ImageType.Cart)
export class ImageCart extends ImageParentEntity {
  @ManyToOne(() => ProductCart, (product: ProductCart) => product.image)
  product: ProductCart;
}
