import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { resultEntity } from './result.entity';

@Entity("Subject")
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  SubjectName: string;

  @OneToMany(() => resultEntity, (result) => result.Subject)
  Results: resultEntity[];

//   @OneToMany(() => SubjectTeacher, (subjectTeacher) => subjectTeacher.Subject)
//   SubjectTeachers: SubjectTeacher[];
}
