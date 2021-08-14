import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateNoteDTO {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
