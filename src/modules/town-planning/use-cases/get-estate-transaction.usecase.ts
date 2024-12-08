import { Injectable } from '@nestjs/common';
import { EstateTransactionRepositoryInterface } from '../domain/estate-transaction.repository.interface';

@Injectable()
export class GetEstateTransactionUseCase {
  constructor(private readonly repo: EstateTransactionRepositoryInterface) {}

  async execute(year: number, prefectureCode: number, type: number) {
    const result = await this.repo.findByConditions(year, prefectureCode, type);
    if (result.length > 0) {
      const data = result[0].data;
      if (data && data.result && data.result.years && data.result.years.length > 0) {
        return {
          year: year,
          prefectureCode: prefectureCode,
          type: type,
          value: data.result.years[0].value,
        };
      }
    }
    return {};
  }
}
