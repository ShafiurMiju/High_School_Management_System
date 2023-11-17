import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from 'typeorm';
// import { AcademicNotice } from './academic-notice.entity';

@Entity("administrator")
@Unique(["Email"])
export class AdministratorEntity {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Email: string;

  @Column()
  ContactNumber: number;

  @Column()
  Gender: string;

  @Column({ type: 'date' })
  DateOfBirth: Date;

  @Column()
  Password: string;

  @Column()
  Address: string;

//   @OneToMany(() => AcademicNotice, (academicNotice) => academicNotice.Admin)
//   AcademicNotices: AcademicNotice[];
}
