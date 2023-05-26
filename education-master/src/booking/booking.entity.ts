import { Room } from 'src/rooms/room.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Visitors } from '../visitors/visitors.entity';
import { Options } from '../options/options.entity';
import { Added_option } from 'src/added_options/added_option.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  booking_id: number;
  @Column()
  start_date: Date;
  @Column()
  end_date: Date;
  @Column()
  amount_of_nights: number;
  @Column()
  amount_of_visitors: number;
  @Column()
  bill:number;
  @Column()ы
  room_id:number;
  @Column()
  visitor_id:number;
  @ManyToOne((type) => Room, (room) => room.bookings)
  @JoinTable({
    name: 'rooms',
    joinColumn: { name: 'rooms.room_id' },
    inverseJoinColumn: { name: 'room_id' },
  })
  booking:Room[];
  @ManyToMany((type) => Visitors, (visitors) => visitors.bookings) 
  @JoinTable({
    name: 'visitors',
    joinColumn: { name: 'visitors.visitor_id' },
    inverseJoinColumn: { name: 'visitor_id' },
  })
  @OneToMany((type) => Added_option, (added_option) => added_option.bookings)
  @JoinTable({

    name: 'added_option',
    joinColumn: { name: 'added_option.booking_id' },
    inverseJoinColumn: { name: 'booking_id' },
  })
  bookings:Visitors[];
  rooms: any;
  options: any;
  static visitors: any;//undo
  added_option: any;
}
