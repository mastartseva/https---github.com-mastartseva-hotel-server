import { Controller, Get, Param, Put, Body, Delete, Post } from "@nestjs/common";
import { Added_option } from "./added_option.entity";
import {Added_optionService } from "src/added_options/added_option.service"


@Controller('added_option')
export class Added_optionController {
  constructor(public added_optionService: Added_optionService) {
  }
  @Get()
  findAll() {
    return this.added_optionService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.added_optionService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdded_option: Added_option) {
    return this.added_optionService.update(+id, updateAdded_option);
  }
  @Post()
  create(@Body() createAdded_option: Added_option) {
    return this.added_optionService.create(createAdded_option);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.added_optionService.remove(+id);
  }
  @Get('incomplete')
  findIncomplete() {
    this.added_optionService.findIncomplete();
  }

}