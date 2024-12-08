import { EstateTransactionEntity } from './estate-transaction.entity';

export abstract class EstateTransactionRepositoryInterface {
  abstract findByConditions(
    year: number,
    prefectureCode: number,
    type: number,
  ): Promise<EstateTransactionEntity[]>;
}
