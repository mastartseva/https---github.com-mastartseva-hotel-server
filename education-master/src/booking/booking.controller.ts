import {BookingService} from './booking.service'
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Booking } from './booking.entity';

@Controller('room')
export class BookingController {
  constructor(public bookingService: BookingService) {
  }
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBooking: Booking) {
    return this.bookingService.update(+id, updateBooking);
  }
  @Post()
  create(@Body() createBooking: Booking) {
    return this.bookingService.create(createBooking);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
  @Get('incomplete')
  findIncomplete() {
    this.bookingService.findIncomplete();
  }

}