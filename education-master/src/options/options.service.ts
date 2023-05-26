import { Injectable } from "@nestjs/common";
import { Options } from "./options.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Booking } from "src/booking/booking.entity";
import { UpdateOptionDto } from "./UpdateOption.dto";
import { Added_option } from "src/added_options/added_option.entity";

@Injectable()
export class OptionService {
    constructor(
        @InjectRepository(Option)
        private readonly optionRepository: Repository<Options>,
        @InjectRepository(Added_option)
        private readonly added_optionsRepository: Repository<Added_option>,
        ) {}
    async update(option_id: number, updatedOption: UpdateOptionDto):Promise<Options> {
        //получаем объект Author для обновления по id
        const option = await this.optionRepository.findOne({ where: { option_id } }); //получаем объект Author по id из БД
        option.option_name = updatedOption.option_name; //обновляем поля объекта Author
        option.price = updatedOption.price;
        await this.optionRepository.save(option); //сохраняем объект Author в БД
        return option; //возвращаем объект Author
      }
    findOne(option_id: number): Promise<Options> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
        return this.optionRepository.findOne({
          //получаем объект Author по id
          where: { option_id }, //указываем условие поиска по id
          //relations: { added_options: true }, //получаем связанные объекты
        });
    }
    
    
    async findAll(): Promise<Options[]> {
        const rooms = await this.optionRepository.find({
          //получаем связанные объекты
          //relations: { added_options: true,},
        }); //получаем массив Author из БД
        return rooms; //возвращаем массив Author
      }
    async create(option: Options): Promise<Options> {
        const newOption = await this.optionRepository.create(option);
        newOption.option_name = option.option_name
        newOption.price = option.price
        await this.optionRepository.save(newOption)
        return option
    }
    remove(option_id: number) {
        this.optionRepository.delete({option_id})
    }
      
    

    
}

