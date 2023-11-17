import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity("Subject")
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  SubjectName: string;

//   @OneToMany(() => Result, (result) => result.Subject)
//   Results: Result[];

//   @OneToMany(() => SubjectTeacher, (subjectTeacher) => subjectTeacher.Subject)
//   SubjectTeachers: SubjectTeacher[];
}
