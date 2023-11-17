import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentEntity } from "./student.entity";

@Entity("section")
export class sectionEntity{
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    SectionName: string;

    @OneToMany(() => StudentEntity, (student) => student.Section, {cascade:true})
    Students: StudentEntity[];
}