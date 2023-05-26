import { Booking } from 'src/booking/booking.entity';
import { Options } from 'src/options/options.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('added_option')
export class Added_option {
  @PrimaryGeneratedColumn()
  added_option_id: number;
  @Column()
  summ: number;
  @Column()
  amount: number;
  @Column()
  option_id: number;
  @Column()
  booking_id: number;
  @ManyToOne((type) => Options, (ooptions) => ooptions.added_option)
  @JoinTable({

    name: 'ooptions',
    joinColumn: { name: 'ooption.option_id' },
    inverseJoinColumn: { name: 'option_id' },
  })  
  @ManyToOne((type) => Booking, (bookings) => bookings.added_option)
  @JoinTable({

    name: 'bookings',
    joinColumn: { name: 'bookings.booking_id' },
    inverseJoinColumn: { name: 'booking_id' },
  })
  bookings: Booking[]
  ooptions: any;

}
