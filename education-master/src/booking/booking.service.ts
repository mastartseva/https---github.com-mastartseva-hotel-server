import { Injectable } from "@nestjs/common";
import { In, Repository } from "typeorm";
import { Booking } from "./booking.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBookingDto } from "./CreateBookingDTO";
import { Room } from "src/rooms/room.entity";

@Injectable()
export class BookingService {
    findIncomplete() {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(Booking)
        private readonly bookingRepository: Repository<Booking>,
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>
    ){}
    datasourceService: any;
    async create(bookingDto: CreateBookingDto): Promise<Booking>
 {
    //получаем объект CreateAuthorDto
    const booking = this.bookingRepository.create(); //создаем объект Author из репозитория
    booking.start_date = bookingDto.start_date; //заполняем поля объекта Author
    booking.end_date = bookingDto.end_date;
    booking.amount_of_nights = bookingDto.amount_of_nights;
    booking.amount_of_visitors = bookingDto.amount_of_visitors
    booking.bill = bookingDto.bill
    const rooms = await this.roomRepository.findBy({
        //booking_id: In(bookingDto.rooms),
    });
    await this.bookingRepository.save(booking); //сохраняем объект Author в БД
    return booking; //возвращаем объект Author
  }

    findOne(booking_id: number): Promise<Booking> {

        return this.bookingRepository.findOne({where: {booking_id}});
    }

    async findAll(): Promise<Booking[]> {

        return await this.bookingRepository.find();
    }

    async update(booking_id: number, updatedBooking: Booking) {

        const booking = await this.bookingRepository.findOne({where:{booking_id}});
        booking.start_date = updatedBooking.start_date
        booking.end_date = updatedBooking.end_date
        booking.amount_of_nights = updatedBooking.amount_of_nights
        booking.amount_of_visitors = updatedBooking.amount_of_visitors
        booking.bill = updatedBooking.bill
        await this.bookingRepository.save(booking)
        return booking
    }

    remove(booking_id: number) {

        this.bookingRepository.delete({booking_id})
    }
    
}