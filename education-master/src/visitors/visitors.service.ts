import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Visitors } from "./visitors.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class VisitorService {
    constructor(
        @InjectRepository(Visitors)
        private readonly visitorstRepository: Repository<Visitors>
    ){}

    async create(visitor: Visitors): Promise<Visitors> {

        const new_visitor = await this.visitorstRepository.create(visitor);
        new_visitor.visitor_name = visitor.visitor_name;
        new_visitor.middlename = visitor.middlename;
        new_visitor.surname = visitor.surname;
        new_visitor.phone_number = visitor.phone_number;
        await this.visitorstRepository.save(new_visitor);
        return visitor;
    }

    findOne(visitor_id: number): Promise<Visitors> {

        return this.visitorstRepository.findOne({where: {visitor_id}});
    }

    async findAll(): Promise<Visitors[]> {

        return await this.visitorstRepository.find();
    }

    async update(visitor_id: number, updatedVisitor: Visitors) {

        const visitor = await this.visitorstRepository.findOne({where:{visitor_id}});
        visitor.visitor_name = updatedVisitor.visitor_name
        visitor.middlename = updatedVisitor.middlename
        visitor.surname = updatedVisitor.surname
        visitor.phone_number = updatedVisitor.phone_number
        await this.visitorstRepository.save(visitor)
        return visitor
    }

    remove(visitor_id: number) {

        this.visitorstRepository.delete({visitor_id})
    }
    
}

