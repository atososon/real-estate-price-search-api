import { Injectable } from '@nestjs/common';
import { EstateTransactionRepositoryInterface } from '../domain/estate-transaction.repository.interface';
import { EstateTransactionEntity } from '../domain/estate-transaction.entity';
import { EstateTransactionDataSource } from './estate-transaction.datasource';

@Injectable()
export class EstateTransactionRepository implements EstateTransactionRepositoryInterface {
  constructor(private readonly dataSource: EstateTransactionDataSource) {}

  async findByConditions(year: number, prefectureCode: number, type: number): Promise<EstateTransactionEntity[]> {
    const allData = this.dataSource.getAllData();
    return allData.filter(
      (item) =>
        item.year === year &&
        item.prefectureCode === prefectureCode &&
        item.type === type,
    );
  }
}
