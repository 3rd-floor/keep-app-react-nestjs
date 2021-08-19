import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTagDTO {
  @IsNotEmpty()
  @IsString()
  slug: string;
}
