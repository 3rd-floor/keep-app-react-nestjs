import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  index() {
    return this.noteService.index();
  }

  @Get(':uuid')
  get(@Param() params) {
    return this.noteService.get(params.uuid);
  }

  @Post()
  create(
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    createNoteDTO: CreateNoteDTO,
  ) {
    return this.noteService.create(createNoteDTO);
  }

  @Put(':uuid')
  update(
    @Param() params,
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    updateNoteDTO: UpdateNoteDTO,
  ) {
    return this.noteService.update(params.uuid, updateNoteDTO);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param() params) {
    this.noteService.delete(params.id);
  }
}
