export class EstateTransactionEntity {
    constructor(
      public year: number,
      public prefectureCode: number,
      public type: number,
      public data: any,
    ) {}
  }
  