import { Injectable } from '@nestjs/common';
import { EstateTransactionEntity } from '../domain/estate-transaction.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EstateTransactionDataSource {
  private data: EstateTransactionEntity[];

  constructor() {
    const filePath = path.resolve(__dirname, '../../../../assets/estate_transactions.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    this.data = jsonData.map(
      (item: any) =>
        new EstateTransactionEntity(
          item.year,
          item.prefectureCode,
          item.type,
          item.data,
        ),
    );
  }

  getAllData(): EstateTransactionEntity[] {
    return this.data;
  }
}