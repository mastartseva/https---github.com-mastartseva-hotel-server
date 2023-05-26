
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Added_option } from 'src/added_options/added_option.entity';


@Entity('ooptions')
export class Options {
  @PrimaryGeneratedColumn()
  option_id: number;
  @Column() 
  option_name: string;
  @Column()
  price: number;
  @OneToMany((type) => Added_option, (added_option) => added_option.ooptions)
  @JoinTable({
    name: 'added_option',
    joinColumn: { name: 'added_option.option_id' },
    inverseJoinColumn: { name: 'option_id' },
  })
  option: Added_option[];
  bookings: any;
  added_option: any;
}



