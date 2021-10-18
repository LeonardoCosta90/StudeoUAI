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

@Entity('attended_class')
class AttendedClass {
  @PrimaryColumn()
  id: string;

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
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date();
    }
  }
}

export { AttendedClass };
