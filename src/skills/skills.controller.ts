import { Controller,Get, Post, Body,  Delete} from '@nestjs/common';
import {SkillsService} from './skills.service'
import {SkillDto} from './dto/skill.dto'
@Controller('skills')

export class SkillsController {
	constructor(private readonly skillsService: SkillsService){}

	@Get()
	async getSkills(){
		console.log(this.skillsService.get())
		return await this.skillsService.get()
	}

	@Post()
	create(@Body() skill: SkillDto){
		console.log(skill)
		this.skillsService.create(skill)
	}

	@Delete()
	delete (){
		return 'deleted'
	}
}
