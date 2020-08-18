import {Document} from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Skill extends Document {
	@Prop({required: true})
	name: string

	@Prop({required: true})
	knowledge: number
}

export const SkillSchema = SchemaFactory.createForClass(Skill)
