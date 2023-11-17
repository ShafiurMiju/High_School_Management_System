import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorEntity } from './entities/administrator.entity';
import { classEntity } from './entities/class.entity';
import { sectionEntity } from './entities/section.entity';
import { StudentEntity } from './entities/student.entity';
import { SchoolInfoEntity } from './entities/SchoolInfo.entity';
import { DepartmentEntity } from './entities/Department.entity';
import { TeacherEntity } from './entities/Teacher.entity';
import { StaffEntity } from './entities/Staff.entity';
import { SubjectEntity } from './entities/Subject.entity';
import { gradeEntity } from './entities/grade.Entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdministratorEntity, classEntity, sectionEntity, StudentEntity, SchoolInfoEntity, DepartmentEntity, TeacherEntity, StaffEntity, SubjectEntity, gradeEntity])],
  controllers: [AdministratorController],
  providers: [AdministratorService],
})
export class AdministratorModule {}
