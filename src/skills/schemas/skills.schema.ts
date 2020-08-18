import {Document} from 'mongoose'
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

@Schema()
export class Skill extends Document {
	@Prop({required: true})
	name: string

	@Prop({required: true})
	knowledge: number

	@Prop()
	category: string

	@Prop()
	status: string

	toJSON(){
	let obj = this.toObject()
	delete obj._id
	delete obj.__v
	return obj
	}
}
export const SkillSchema = SchemaFactory.createForClass(Skill)
