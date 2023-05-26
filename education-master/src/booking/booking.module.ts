import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from '../rooms/room.entity';
import { Options } from '../options/options.entity';
import { Booking } from './booking.entity';
import { Visitors } from '../visitors/visitors.entity';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  controllers: [BookingController],
  providers: [BookingService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Booking, Room,Visitors,Options]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class BookingModule {}
