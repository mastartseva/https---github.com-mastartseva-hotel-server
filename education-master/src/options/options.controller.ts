import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OptionService } from "./options.service";
import { UpdateOptionDto } from "./UpdateOption.dto";
import { Options } from "./options.entity";

@Controller('option')
@ApiTags('Опция')
export class OptionController {
    constructor(private readonly optionService: OptionService) {}

    @Get()
    findAll() {
        return this.optionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.optionService.findOne(+id);
    }

    
    @Put(':id')
    update(@Param('id') option_id: string, @Body() UpdateOptionDto: Options) {
        return this.optionService.update(+option_id,  UpdateOptionDto);
    }

    @Post()
    create(@Body() createOption: Options) {
    return this.optionService.create(createOption);
  }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.optionService.remove(+id);
    }
}
