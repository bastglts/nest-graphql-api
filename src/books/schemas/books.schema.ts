import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BookDocument extends Document {
  @Prop()
  authorId: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const BookSchema = SchemaFactory.createForClass(BookDocument);
