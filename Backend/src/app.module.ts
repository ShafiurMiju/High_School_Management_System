import { Module } from '@nestjs/common';
import { AdministratorModule } from './administrator/administrator.module';

@Module({
  imports: [AdministratorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
