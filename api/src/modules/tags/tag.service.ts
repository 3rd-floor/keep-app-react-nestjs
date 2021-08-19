import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { NIL as NIL_UUID } from 'uuid';
import { CreateTagDTO } from './dto/create-tag.dto';
import { UpdateTagDTO } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tag) private tagRespository: Repository<Tag>) {}

  index(): Promise<Tag[]> {
    return this.tagRespository.find();
  }

  async get(uuid: NIL_UUID): Promise<Tag> {
    try {
      return await this.tagRespository.findOneOrFail({
        uuid,
      });
    } catch (err) {
      throw err;
    }
  }

  async create(createTagDTO: CreateTagDTO): Promise<Tag> {
    const newTag = this.tagRespository.create(createTagDTO);
    return await this.tagRespository.save(newTag);
  }

  async update(uuid: NIL_UUID, updateTagDTO: UpdateTagDTO): Promise<Tag> {
    const tag = await this.get(uuid);
    Object.assign(tag, updateTagDTO);
    return await this.tagRespository.save(tag);
  }

  async delete(uuid: NIL_UUID) {
    try {
      const tag = await this.get(uuid);
      await this.tagRespository.remove(tag);
    } catch (err) {
      throw err;
    }
  }
}
