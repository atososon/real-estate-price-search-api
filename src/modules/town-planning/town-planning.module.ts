import { Module } from '@nestjs/common';
import { EstateTransactionController } from './controller/estate-transaction.controller';
import { GetEstateTransactionUseCase } from './use-cases/get-estate-transaction.usecase';
import { EstateTransactionRepositoryInterface } from './domain/estate-transaction.repository.interface';
import { EstateTransactionRepository } from './infrastructure/estate-transaction.repository';
import { EstateTransactionDataSource } from './infrastructure/estate-transaction.datasource';

@Module({
  controllers: [EstateTransactionController],
  providers: [
    GetEstateTransactionUseCase,
    EstateTransactionDataSource,
    {
      provide: EstateTransactionRepositoryInterface,
      useClass: EstateTransactionRepository,
    },
  ],
})
export class TownPlanningModule {}
