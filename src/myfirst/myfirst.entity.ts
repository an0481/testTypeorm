import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  age: number;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdDt: Date;
}
