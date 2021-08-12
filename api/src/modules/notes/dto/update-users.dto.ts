import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
