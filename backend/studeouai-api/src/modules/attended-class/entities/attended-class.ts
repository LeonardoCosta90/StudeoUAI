import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Class } from '@modules/class/infra/typeorm/entities/Class';

@Entity('attended_class')
class AttendedClass extends Class {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @Column()
  class_id: string;

  @Column()
  user_id: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date();
    }
  }
}

export { AttendedClass };
