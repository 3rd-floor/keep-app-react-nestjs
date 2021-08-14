import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidV4, NIL as NIL_UUID } from 'uuid';

@Entity('tags')
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude({
    toPlainOnly: true,
  })
  id: number;
  @Column('text')
  uuid: NIL_UUID;
  @Column('text')
  slug: string;

  constructor() {
    super();
    if (!this.uuid) {
      this.uuid = uuidV4();
    }
  }
}
