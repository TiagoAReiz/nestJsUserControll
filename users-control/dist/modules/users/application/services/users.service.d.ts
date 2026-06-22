import { IUsersService } from '../../domain/interfaces/users.service.interface';
import type { IUsersRepository } from '../../domain/interfaces/users.repository.interface';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UsersService implements IUsersService {
    private readonly usersRepository;
    constructor(usersRepository: IUsersRepository);
    create(dto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
