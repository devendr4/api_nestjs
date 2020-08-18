import { Module } from '@nestjs/common';
import {SkillsController} from './skills.controller'
import {MongooseModule} from '@nestjs/mongoose'
import { Skill, SkillSchema } from './schemas/skills.schema'
import { SkillsService } from './skills.service';

@Module({
	imports: [MongooseModule.forFeature([{name: Skill.name, schema: SkillSchema }])],
	controllers: [ SkillsController ],
	providers: [SkillsService]	
})
export class SkillsModule {}
