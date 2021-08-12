import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  index(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async get(id: number): Promise<Note> {
    try {
      const note = await this.noteRepository.findOneOrFail(id);
      return note;
    } catch (err) {
      throw err;
    }
  }

  create(createUserDTO: CreateUserDTO): Promise<Note> {
    const newNote = this.noteRepository.create(createUserDTO);
    return this.noteRepository.save(newNote);
  }

  async update(id: number, updateUserDTO: UpdateUserDTO): Promise<Note> {
    const note = await this.get(id);
    Object.assign(note, updateUserDTO);
    return this.noteRepository.save(note);
  }

  async delete(id: number): Promise<boolean> {
    try {
      const note = await this.get(id);
      this.noteRepository.remove(note);
      return true;
    } catch (err) {
      throw err;
    }
  }
}
