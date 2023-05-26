
import { Booking } from 'src/booking/booking.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('rooms') 
export class Room {
  @PrimaryGeneratedColumn() 
  room_id: number;
  @Column({}) 
  room_name: string;
  @Column()
  room_type: string;
  @Column()
  price_per_night:number;
  @Column()
  rooms: number;
  @Column()
  free_now: boolean;
  @OneToMany((type) => Booking, (bookings) => bookings.rooms) 
  @JoinTable({

     name: 'bookings',
     joinColumn: { name: 'bookings.room_id' }, 
     inverseJoinColumn: { name: 'room_id' }, 
   })
   bookings: Booking[]; 
 }
 