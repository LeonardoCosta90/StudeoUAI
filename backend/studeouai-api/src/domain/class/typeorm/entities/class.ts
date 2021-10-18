import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Category } from './category';
import { Specification } from './specifications';

@Entity('class')
class Class {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  available: boolean;

  @Column()
  category_id: string;

  @Column()
  type: string;

  @Column()
  url: string;

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'category_id',
  })
  category: Category;

  @ManyToMany(() => Specification)
  @JoinTable({
    name: 'specifications_class',
    joinColumns: [{ name: 'class_id' }],
    inverseJoinColumns: [{ name: 'specification_id' }],
  })
  specifications: Specification[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
    }
  }
}

export { Class };
