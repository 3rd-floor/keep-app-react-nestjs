import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  index() {
    return this.noteService.index();
  }

  @Get(':id')
  get(@Param() params) {
    return this.noteService.get(params.id);
  }

  @Post()
  create(
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    createUserDTO: CreateUserDTO,
  ) {
    return this.noteService.create(createUserDTO);
  }

  @Put(':id')
  update(
    @Param() params,
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    updateUserDTO: UpdateUserDTO,
  ) {
    return this.noteService.update(params.id, updateUserDTO);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.noteService.delete(params.id);
  }
}
