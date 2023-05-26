import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Options } from './options.entity';
import { Booking } from '../booking/booking.entity';

@Module({
  controllers: [],
  providers: [],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Options, Booking]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class OptionsModule {}


