import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { DatasourceService } from "src/datasource/datasource.service";
import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { InjectRepository } from "@nestjs/typeorm";
import { Booking } from "../booking/booking.entity";
import { Repository } from "typeorm";
import { Added_option } from "./added_option.entity";
import { Options } from "src/options/options.entity";


@Injectable()
export class Added_optionService{
    findIncomplete() {
        throw new Error("Method not implemented.");
    }
    constructor(
    @InjectRepository(Added_option)
    private readonly added_optionRepository: Repository<Added_option>, // "внедряем" репозиторий Author в сервис
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Options)
    private readonly optionsRepository: Repository<Options>
    ){}
    async create(added_option: Added_option): Promise<Added_option> {

        const newadded_option = await this.added_optionRepository.create(added_option)
        newadded_option.added_option_id = added_option.added_option_id
        newadded_option.summ = added_option.summ
        newadded_option.amount = added_option.amount
        await this.added_optionRepository.save(newadded_option)
        return added_option;
    }
    
    findOne(added_option_id: number): Promise<Added_option> {
    
        return this.added_optionRepository.findOne({where: {added_option_id}})
    }
    
    async findAll(): Promise<Added_option[]> {
        return await this.added_optionRepository.find();
    }
    
    async update(added_option_id: number, added_option: Added_option) {
        const flight = await this.added_optionRepository.findOne({where:{added_option_id}})
        added_option.added_option_id = added_option.added_option_id
        added_option.summ = added_option.summ
        added_option.amount = added_option.amount
        await this.added_optionRepository.save(flight)
        return flight
    }
    
    remove(added_option_id: number) {
        this.added_optionRepository.delete({added_option_id})
    }

}





  
    

   