import { Controller, Get, Query } from '@nestjs/common';
import { GetEstateTransactionQueryDto } from '../dto/get-estate-transaction.query.dto';
import { GetEstateTransactionUseCase } from '../use-cases/get-estate-transaction.usecase';

@Controller('api/v1/townPlanning/estateTransaction')
export class EstateTransactionController {
  constructor(private readonly getEstateTransactionUseCase: GetEstateTransactionUseCase) {}

  @Get('bar')
  async getEstateTransactions(@Query() query: GetEstateTransactionQueryDto) {
    return await this.getEstateTransactionUseCase.execute(
      query.year,
      query.prefCode,
      query.displayType,
    );
  }
}
