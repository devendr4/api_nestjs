import { Controller,Get, Post, Body, Req} from '@nestjs/common';
import {SkillsService} from './skills.service'
import {Skill} from './dto/skill.dto'
@Controller('skills')

export class SkillsController {
	constructor(private skillsService: SkillsService){}

	@Get()
	getSkills(): string{
		return 'puta3'
	}

	@Post()
	create(@Body() skill: Skill){
		console.log(skill)
		this.skillsService.create(skill)
	}
}
