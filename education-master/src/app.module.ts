import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { BookingModule } from './booking/booking.module';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionsModule } from './options/options.module';
import { Added_optionModule } from './added_options/added_option.module';
import { VisitorsModule } from './visitors/visitors.module';
import { Added_optionController } from './added_options/added_option.controller';
import { BookingController } from './booking/booking.controller';
import { RoomController } from './rooms/rooms.controller';
import { VisitorsController } from './visitors/visitors.controller';

@Module({
  imports: [RoomsModule, DatasourceModule,OptionsModule,Added_optionModule,BookingModule,VisitorsModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      database: 'hotel',
      username: 'postgres', //имя пользователя
      password: '1234', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
      entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
