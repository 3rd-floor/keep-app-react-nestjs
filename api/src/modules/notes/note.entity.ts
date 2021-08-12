import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';

@Entity('notes')
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  uuid: string;
  @Column('text')
  title: string;
  @Column('text')
  description: string;
  @Column('timestamp')
  created_at: Timestamp;
  @Column('timestamp')
  updated_at: Timestamp;

  constructor() {
    super();
    if (!this.uuid) {
      this.uuid = uuidV4();
    }
  }
}
