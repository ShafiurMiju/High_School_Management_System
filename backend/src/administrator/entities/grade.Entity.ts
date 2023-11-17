import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Grade")
export class gradeEntity{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    GradeName: string;
    
    // OneToMany(() => resultEntity, (grade) => grade.Grade)
    // Grade: resultEntity;

}