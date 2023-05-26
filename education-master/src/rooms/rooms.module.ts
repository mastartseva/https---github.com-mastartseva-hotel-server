import { Module } from '@nestjs/common';
import {  RoomsService } from './rooms.service';
import { RoomController } from './rooms.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { Booking } from '../booking/booking.entity';

@Module({
  controllers: [RoomController],
  providers: [RoomsService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Room, Booking]), // !!! В модуле автор мы используем все три сущности, поэтому все три сущности необходимо импортирвоать!
  ],
})
export class RoomsModule {}

