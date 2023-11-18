import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentEntity } from "./student.entity";
import { classRoutineEntity } from "./classRoutine.entity";

@Entity("class")
export class classEntity{
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    ClassName: string;

    @OneToMany(() => StudentEntity, (student) => student.Class, {cascade:true})
    Students: StudentEntity[];

    @OneToMany(() => classRoutineEntity, (classroutine) => classroutine.Class)
    ClassRoutine: classRoutineEntity[];
}