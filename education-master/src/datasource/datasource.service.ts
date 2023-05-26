import { Injectable } from '@nestjs/common';
import { Room } from 'src/rooms/room.entity';

@Injectable()
export class DatasourceService {
  private rooms: Room[] = [];

  getRooms(): Room[] {
    return this.rooms;
  }
}