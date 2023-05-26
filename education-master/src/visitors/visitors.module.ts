import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visitors } from './visitors.entity';
import { Booking } from '../booking/booking.entity';

@Module({
  controllers: [],
  providers: [],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Visitors, Booking]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class VisitorsModule {}

