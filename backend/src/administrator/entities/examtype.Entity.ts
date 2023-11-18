import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ExamType")
export class examtypeEntity{
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ExamTypeName: string;
    
    

}