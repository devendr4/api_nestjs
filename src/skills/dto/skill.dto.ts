import { IsDate, IsString, IsInt, IsIn } from 'class-validator';
export class SkillDto {
  @IsString()
  name: string;

  //@IsInt()
  knowledge: number;

  @IsString()
  @IsIn(['framework', 'language'])
  type: string;

  //@IsString()
  //@IsIn(['enabled', 'enabled'])
  status: string;

  /*  @IsDate()*/
  date: Date;
}
