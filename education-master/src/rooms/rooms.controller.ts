import { RoomsService } from './rooms.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Room } from './room.entity';


@Controller('room')
export class RoomController {
  constructor(public roomService: RoomsService) {
  }
  @Get()
  findAll() {
    return this.roomService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoom: Room) {
    return this.roomService.update(+id, updateRoom);
  }
  @Post()
  create(@Body() createRoom: Room) {
    return this.roomService.create(createRoom);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
  @Get('incomplete')
  findIncomplete() {
    this.roomService.findIncomplete();
  }

}


