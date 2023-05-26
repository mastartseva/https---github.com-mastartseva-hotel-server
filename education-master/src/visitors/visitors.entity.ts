import { Room } from 'src/rooms/room.entity';
import { Booking } from '../booking/booking.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('visitors')
export class Visitors {
  @PrimaryGeneratedColumn()
  visitor_id: number;
  @Column() //поле должно быть уникальным{ unique: true }
  visitor_name: string;
  @Column()
  middlename: string;
  @Column()
  surname: string;
  @Column()
  phone_number:number;
  @ManyToMany((type) => Booking, () => Booking.visitors)
  @JoinTable({
    name: 'bookings',
    joinColumn: { name: 'bookings.visitor_id' },
    inverseJoinColumn: { name: 'booking_id' },
  })
  visitors: Room[];//доделать
  bookings: any;
}