import {
  HttpException,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Res,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillDto } from './dto/skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async getSkills() {
    return await this.skillsService.get();
  }

  @Post()
  createSkill(@Body() skill: SkillDto) {
    return this.skillsService.create(skill);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() skill: any ) {
    return this.skillsService.update(id,skill).catch(err => {
      throw new HttpException('error', 404);
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    return this.skillsService.delete(id);
  }
}
