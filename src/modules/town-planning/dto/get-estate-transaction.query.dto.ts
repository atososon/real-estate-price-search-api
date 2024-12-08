import { IsInt, IsIn, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { KANTO_CODES } from '../domain/types';

export class GetEstateTransactionQueryDto {
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @IsIn([2015, 2016, 2017, 2018], { message: 'year must be between 2015 and 2018' })
  year!: number;

  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @IsIn(KANTO_CODES, { message: 'prefCode must be a Kanto region code' })
  prefCode!: number;

  @IsString()
  @IsOptional()
  cityCode?: string;

  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @IsIn([1, 2], { message: 'displayType must be 1 or 2' })
  displayType!: number;
}