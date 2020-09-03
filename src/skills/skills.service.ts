import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SkillDto } from './dto/skill.dto';
import { Skill, SkillSchema } from './schemas/skills.schema';
@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<Skill>) {}

  async get() {
    let skills = await this.skillModel.find({ status: 'enabled' }).exec();
    return skills;
  }

  create(skillDto: SkillDto) {
    let newSkill = new this.skillModel(skillDto);
    newSkill.knowledge = Number(newSkill.knowledge);
    newSkill.status = 'enabled';
    newSkill.save();
    console.log(newSkill);
    return newSkill;
  }

  async update(id: string, skill: any) {
	  console.log(skill)
    return await this.skillModel.findById(id);
  }

  async delete(id: string) {
    return await this.skillModel
      .findByIdAndUpdate(id, { status: 'disabled' }, { new: true })
      .exec();
  }
}
