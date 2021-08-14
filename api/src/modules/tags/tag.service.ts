import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tag) private tagRespository: Repository<Tag>) {}

  index(): Promise<Tag[]> {
    return this.tagRespository.find();
  }
}
