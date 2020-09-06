import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PostDocument extends Document {
  @Prop()
  authorId: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  votes?: number;
}

export const PostSchema = SchemaFactory.createForClass(PostDocument);
