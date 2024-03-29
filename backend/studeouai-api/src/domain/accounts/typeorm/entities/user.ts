import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  isAdmin: boolean;

  @Column({ nullable: true })
  avatar: string;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @Expose({ name: 'avatar_url' })
  avatar_url(): string {
    switch (process.env.STORAGE_TYPE) {
      case 'local':
        return `${process.env.APP_API_URL}/avatar/${this.avatar}`;
      case 's3':
        return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar}`;
      default:
        return null;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
