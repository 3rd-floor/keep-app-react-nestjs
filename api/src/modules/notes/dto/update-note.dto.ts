import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateNoteDTO {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description: string;
}
