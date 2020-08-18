import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { SkillDto } from './dto/skill.dto'
import { Skill } from './schemas/skills.schema'

@Injectable()
export class SkillsService {	
	constructor(@InjectModel(Skill.name)private skillModel: Model<Skill> ) {}
	
	async get(){
	let a:any = await this.skillModel.find().exec()
	console.log(a)
		return a
	}
	
	async create(skillDto: SkillDto){
		const newSkill = new this.skillModel(skillDto)
		return newSkill.save()
	}

	delete(){

	}
}

