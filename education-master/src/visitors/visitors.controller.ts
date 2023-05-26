import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { VisitorService } from "./visitors.service";

import { Visitors } from "./visitors.entity";

@Controller('visitors')
@ApiTags('Постояльцы')
export class VisitorsController {
    constructor( private readonly visitorService: VisitorService) {}

    @Get()
    findAll() {
        return this.visitorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.visitorService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateVisitor: Visitors) {
        return this.visitorService.update(+id, updateVisitor);
    }

    @Post()
    create(@Body() createVisitor: Visitors) {
        return this.visitorService.create(createVisitor);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.visitorService.remove(+id);
    }
}