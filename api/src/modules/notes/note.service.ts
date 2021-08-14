import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';
import { Note } from './note.entity';
import { NIL as NIL_UUID } from 'uuid';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  index(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async get(uuid: NIL_UUID): Promise<Note> {
    try {
      const note = await this.noteRepository.findOneOrFail({
        uuid,
      });
      return note;
    } catch (err) {
      throw err;
    }
  }

  async create(createNoteDTO: CreateNoteDTO): Promise<Note> {
    const newNote = this.noteRepository.create(createNoteDTO);
    return await this.noteRepository.save(newNote);
  }

  async update(uuid: NIL_UUID, updateNoteDTO: UpdateNoteDTO): Promise<Note> {
    const note = await this.get(uuid);
    Object.assign(note, updateNoteDTO);
    return await this.noteRepository.save(note);
  }

  async delete(uuid: NIL_UUID) {
    try {
      const note = await this.get(uuid);
      await this.noteRepository.remove(note);
    } catch (err) {
      throw err;
    }
  }
}
