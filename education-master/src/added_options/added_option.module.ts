import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from '../booking/booking.entity';
import { Added_optionService } from './added_option.service';
import { Added_optionController } from './added_option.controller';
import { Added_option } from './added_option.entity';
import { Options } from 'src/options/options.entity';

@Module({
  controllers: [Added_optionController],
  providers: [Added_optionService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Added_option, Booking,Options])]
})
export class Added_optionModule {}

