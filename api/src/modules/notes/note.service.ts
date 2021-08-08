import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  index() {
    return this.noteRepository.find();
  }
}
