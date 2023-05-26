import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
    rooms(rooms: any) {
        throw new Error("Method not implemented.");
    }
    @ApiProperty({ example: '2023-05-07', description: 'Дата заезда' })
    start_date: Date;
    @ApiProperty({ example: '2023-05-23', description: 'Дата выезда' })
    end_date: Date;
    @ApiProperty({ example: '16', description: 'Количество ночей' })
    amount_of_nights: number;
    @ApiProperty({ example: '4', description: 'Количество постояльцев' })
    amount_of_visitors: number;
    @ApiProperty({ example: '4567393', description: 'Счет за все проживание' })
    bill:number
  }
  