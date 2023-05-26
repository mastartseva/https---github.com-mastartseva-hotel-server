import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { DatasourceService } from "src/datasource/datasource.service";
import { Room } from "./room.entity";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { InjectRepository } from "@nestjs/typeorm";
import { Booking } from "../booking/booking.entity";
import { Repository } from "typeorm";
import { IncompleteRoomDto } from "./incomplete-room.dto";

@Injectable()
export class RoomsService {
    create(createRoom: Room) {
      throw new Error('Method not implemented.');
    }
    datasourceService: any;
    async findIncomplete(): Promise<IncompleteRoomDto[]> {
      const rooms = await this.roomRepository.find(); //получаем массив Author из БД
      const incompleteRooms: IncompleteRoomDto[] = rooms.map((room) => {
        //преобразуем массив Author в массив IncompleteAuthorDto
        const incompleteRoom = new IncompleteRoomDto();
        incompleteRoom.room_id = room.room_id;
        incompleteRoom.room_name = room.room_name;
        incompleteRoom.room_type = room.room_type;
        incompleteRoom.rooms = room.rooms;
        return incompleteRoom;
      });
      return incompleteRooms; //возвращаем массив IncompleteAuthorDto
    }
  
    constructor(
      @InjectRepository(Room)
      private readonly roomRepository: Repository<Room>, // "внедряем" репозиторий Author в сервис
      @InjectRepository(Booking)
      private readonly bookingRepository: Repository<Booking>, // "внедряем" репозиторий Affiliation в сервис
        
    ){}

    findOne(room_id: number): Promise<Room> {
      // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
      return this.roomRepository.findOne({
        //получаем объект Author по id
        where: { room_id }, //указываем условие поиска по id
        relations: { bookings: true }, //получаем связанные объекты
      });
    }
  
  
    async findAll(): Promise<Room[]> {
      const rooms = await this.roomRepository.find({
        //получаем связанные объекты
        relations: {
          bookings: true,
        },
      }); //получаем массив Author из БД
      return rooms; //возвращаем массив Author
    }
    
    async update(room_id: number, updatedRoom: Room) {
      //получаем объект Author для обновления по id
      const room = await this.roomRepository.findOne({ where: { room_id } }); //получаем объект Author по id из БД
      room.room_id =updatedRoom.room_id; //обновляем поля объекта Author
      room.room_name = updatedRoom.room_name;
      room.room_type = updatedRoom.room_type;
      room.rooms = updatedRoom.rooms;
      room.price_per_night = updatedRoom.price_per_night;
      room.free_now = updatedRoom.free_now;
      await this.roomRepository.save(room); //сохраняем объект Author в БД
      return room; //возвращаем объект Author
    }
  
    remove(room_id: number) {
      this.roomRepository.delete({ room_id }); //удаляем объект Author из БД
    }    
        
}