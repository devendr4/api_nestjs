import { Injectable } from '@nestjs/common';
import { Skill } from './interfaces/skill.interface' 

@Injectable()
export class SkillsService {	

	create(skill: Skill){
		let a = skill.name + ' ' + skill.knowledge
		console.log(a)
		return a 
	}
}

