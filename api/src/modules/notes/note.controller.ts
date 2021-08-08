import { Controller, Get } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  index() {
    return this.noteService.index();
  }
}
