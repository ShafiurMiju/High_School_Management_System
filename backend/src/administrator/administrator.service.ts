import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministratorEntity } from './entities/administrator.entity';
import { Repository } from 'typeorm';
import { AdministratorLoginDTO } from './dto/AdministratorLogin.dto';
import { AdministratorPassChangeDTO } from './dto/AdministratorPassChange.dto';
import { classDTO } from './dto/class.dto';
import { classEntity } from './entities/class.entity';
import { sectionEntity } from './entities/section.entity';
import { sectionDTO } from './dto/section.dto';
import { StudentEntity } from './entities/student.entity';
import * as bcrypt from 'bcrypt';
import { StudentDTO } from './dto/student.dto';
import { SchoolInfoEntity } from './entities/SchoolInfo.entity';
import { DepartmentEntity } from './entities/Department.entity';
import { TeacherEntity } from './entities/Teacher.entity';
import { StaffEntity } from './entities/Staff.entity';
import { SubjectEntity } from './entities/Subject.entity';
import { gradeDTO } from './dto/grade.dto';
import { gradeEntity } from './entities/grade.Entity';
import { SubjectDTO } from './dto/Subject.dto';


@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(AdministratorEntity) private AdministratorRepository: Repository<AdministratorEntity>,
    @InjectRepository(classEntity) private ClassRepository: Repository<classEntity>,
    @InjectRepository(sectionEntity) private SectionRepository: Repository<sectionEntity>,
    @InjectRepository(StudentEntity) private StudentRepository: Repository<StudentEntity>,
    @InjectRepository(SchoolInfoEntity) private SchoolInfoRepository: Repository<SchoolInfoEntity>,
    @InjectRepository(DepartmentEntity) private DepartmentRepository: Repository<DepartmentEntity>,
    @InjectRepository(TeacherEntity) private TeacherRepository: Repository<TeacherEntity>,
    @InjectRepository(StaffEntity) private StaffRepository: Repository<StaffEntity>,
    @InjectRepository(SubjectEntity) private SubjectRepository: Repository<SubjectEntity>,
    @InjectRepository(gradeEntity) private gradeRepository: Repository<gradeEntity>,
  ) {}

  //School Information
  async addSchoolInfo(SchoolInfo:any):Promise<SchoolInfoEntity[]>{
    console.log(SchoolInfo)
    return await this.SchoolInfoRepository.save(SchoolInfo)
  }

  //Administrator Login
  async login(loginData:AdministratorLoginDTO){
    if(loginData.Email != null && loginData.Password != null){
      const exData = await this.AdministratorRepository.findOneBy({Email:loginData.Email})
      const isMatch = await bcrypt.compare(loginData.Password, exData.Password)

      if(isMatch){
        return "Login Success"
      }else{
        return "User Not Found"
      }
    }else{
      return "Email or Password Blank"
    }
  }

  //Administrator Profile View
  async profile(Id:number):Promise<any>{
    try{
      const data = await this.AdministratorRepository.findOne({
        select:{
          FirstName: true,
          LastName: true,
          Email: true,
          ContactNumber: true,
          Gender: true,
          DateOfBirth: true,
          Address: true
        },
        where:{
          ID:Id
        }
      })

      if(data!=null){
        return data
      }else{
        return "User Not Found"
      }
    }catch(error){
      return error
    }
  }

  //Administrator password change
  async passwordChange(Id:number, newPass:AdministratorPassChangeDTO){
    return await this.AdministratorRepository.update(Id, newPass)
  }

  //Add Class
  async addClass(classData:classDTO):Promise<classEntity>{
    return await this.ClassRepository.save(classData)
  }

  //View Class
  async viewClass():Promise<classEntity[]>{
    return await this.ClassRepository.find()
  }

  //Delete Class
  async deleteClass(Id:number){
    return await this.ClassRepository.delete(Id)
  }

    //Add Section
  async addSection(sectionData:sectionDTO):Promise<sectionEntity>{
    return await this.SectionRepository.save(sectionData)
  }

  //View Section
  async viewSection():Promise<sectionEntity[]>{
    return await this.SectionRepository.find()
  }

  //Delete Section
  async deleteSection(Id:number){
    return await this.SectionRepository.delete(Id)
  }

  

  //Add a Student
  async addStudent(student:StudentDTO):Promise<StudentEntity[]>{
    const salt = await bcrypt.genSalt()
    const hassedpassed = await bcrypt.hash(student.StudentPassword, salt)

    student.StudentPassword = hassedpassed

    await this.StudentRepository.save(student);
    
    return await this.StudentRepository.find({
      relations:{
        Class:true,
        Section:true
      }
    })
  } 


  //All Student list View
  async viewStudent(){
    return await this.StudentRepository.find({
      relations:{
        Class:true,
        Section:true
      }
    })
  }


  //All Student list View by Class
  async viewStudentByClass(className:any){
    return await this.StudentRepository.find({
      relations:{
        Class:true,
        Section:true
      },
      where:{
        Class: className
      }
    })
  }


  //Add Department
  async addDepartment(department:any):Promise<DepartmentEntity[]>{
    return await this.DepartmentRepository.save(department)
  }


  //Add a Teacher
  async addTeacher(teacher:any):Promise<TeacherEntity[]>{
    const salt = await bcrypt.genSalt()
    const hassedpassed = await bcrypt.hash(teacher.Password, salt)

    teacher.Password = hassedpassed

    await this.TeacherRepository.save(teacher);
    
    return await this.TeacherRepository.find({
      relations:{
        TeacherDepartment: true
      }
    })
  } 

  //Add a Staff
  async addStaff(staff:any):Promise<StaffEntity>{
    return await this.StaffRepository.save(staff);
  } 

  //Add Subject
  async addSubject(subject:SubjectDTO):Promise<SubjectEntity>{
    return await this.SubjectRepository.save(subject)
  }

  //add garde
  async addgrade(grade:gradeDTO):Promise<gradeEntity>{

    console.log(grade)
    return await this.gradeRepository.save(grade)
  }

  
}