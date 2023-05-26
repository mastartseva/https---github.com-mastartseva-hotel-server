import { ApiProperty } from "@nestjs/swagger";

export class UpdateOptionDto {
  @ApiProperty({example:3})
    option_id: number;
  @ApiProperty({example:'Завтрак',description:'на все время проживания'})
  option_name: string;
  @ApiProperty({example:'1500',description:'За один завтрак'})
    price:number;
  }
  