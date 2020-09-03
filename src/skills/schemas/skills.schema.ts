import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Skill extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  knowledge: number;

  @Prop()
  category: string;

  @Prop({ required: true, enum: ['enabled', 'disabled'] })
  status: string;

  @Prop({ required: true, enum: ['framework', 'language'] })
  type: string;

  @Prop({ required: false })
  logo: string;

  @Prop({ required: true, default: Date.now })
  date_added: Date;

  toJSON() {
    let obj = this.toObject();
    delete obj._id;
    delete obj.__v;
    return obj;
  }
}
export const SkillSchema = SchemaFactory.createForClass(Skill);
