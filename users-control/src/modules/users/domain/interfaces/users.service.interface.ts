import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';

export const USERS_SERVICE = 'USERS_SERVICE';

export interface IUsersService {
  create(dto: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
  update(id: string, dto: UpdateUserDto): Promise<User>;
  remove(id: string): Promise<void>;
}
