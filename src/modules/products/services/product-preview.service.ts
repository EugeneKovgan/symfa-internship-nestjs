import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductPreview } from '@entities/products';
import { ApiGetProductPreviewModel, UploadProductDto } from '@modules/products/models';

@Injectable()
export class ProductPreviewService {
  constructor(
    @InjectRepository(ProductPreview)
    private readonly _productsPreviewRepository: Repository<ProductPreview>,
  ) {}

  async getAll(): Promise<ApiGetProductPreviewModel[]> {
    return this._productsPreviewRepository.find({
      order: {
        path: 'asc',
        order: 'asc',
      },
    });
  }

  async getPreviewProductById(id: string): Promise<ApiGetProductPreviewModel> {
    const product = await this._productsPreviewRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async uploadPreviewProduct({ path, order }: UploadProductDto): Promise<string> {
    const product = this._productsPreviewRepository.create({
      order,
      path,
    });

    const uploadedProduct = await this._productsPreviewRepository.save(product);

    return uploadedProduct.id;
  }

  async changeOrder(id: string, order: number): Promise<void> {
    await this._productsPreviewRepository.update({ id }, { order });
  }

  async deleteProduct(id: string): Promise<void> {
    await this._productsPreviewRepository.delete({ id });
  }
}
