import { Body, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProductsController as Controller } from '../decorators';
import { ApiGetProductPreviewModel, ChangeOrderDto, UploadProductDto } from '../models';
import { ProductPreviewService } from '../services';

@Controller('preview')
@ApiTags('products/preview')
export class ProductPreviewController {
  constructor(private readonly _productPreviewService: ProductPreviewService) {}

  @Get()
  @ApiResponse({
    type: ApiGetProductPreviewModel,
    status: HttpStatus.OK,
    isArray: true,
  })
  getAll(): Promise<ApiGetProductPreviewModel[]> {
    return this._productPreviewService.getAll();
  }

  @Get(':id')
  @ApiResponse({
    type: ApiGetProductPreviewModel,
    status: HttpStatus.OK,
  })
  getPreviewProductById(@Param('id', ParseUUIDPipe) id: string): Promise<ApiGetProductPreviewModel> {
    return this._productPreviewService.getPreviewProductById(id);
  }

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: 'string', description: 'uuid' })
  uploadPreviewProduct(@Body() uploadedProduct: UploadProductDto): Promise<string> {
    return this._productPreviewService.uploadPreviewProduct(uploadedProduct);
  }

  @Patch()
  @ApiResponse({ status: HttpStatus.OK })
  changeOrder(@Query('ProductPreviewId', ParseUUIDPipe) id: string, @Body() { order }: ChangeOrderDto) {
    return this._productPreviewService.changeOrder(id, order);
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK })
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this._productPreviewService.deleteProduct(id);
  }
}
