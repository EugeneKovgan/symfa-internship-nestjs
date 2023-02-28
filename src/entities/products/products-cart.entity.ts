import { ChildEntity } from 'typeorm';

import { ProductType } from '@models/enum';

import { ProductParentEntity } from './products.entity';

@ChildEntity(ProductType.Cart)
export class ProductCart extends ProductParentEntity {}
