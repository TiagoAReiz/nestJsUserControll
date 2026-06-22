import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeormEntity } from './infrastructure/persistence/entities/user.typeorm.entity';
import { UsersTypeormRepository } from './infrastructure/persistence/repositories/users.typeorm.repository';
import { UsersService } from './application/services/users.service';
import { UsersController } from './presentation/controllers/users.controller';
import { USERS_REPOSITORY } from './domain/interfaces/users.repository.interface';
import { USERS_SERVICE } from './domain/interfaces/users.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeormEntity])],
  controllers: [UsersController],
  providers: [
    {
      provide: USERS_REPOSITORY,
      useClass: UsersTypeormRepository,
    },
    {
      provide: USERS_SERVICE,
      useClass: UsersService,
    },
  ],
})
export class UsersModule {}
