import { Repository } from 'typeorm';
import { IUsersRepository } from '../../../domain/interfaces/users.repository.interface';
import { User } from '../../../domain/entities/user.entity';
import { UserTypeormEntity } from '../entities/user.typeorm.entity';
export declare class UsersTypeormRepository implements IUsersRepository {
    private readonly repo;
    constructor(repo: Repository<UserTypeormEntity>);
    create(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: string, data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>): Promise<User>;
    delete(id: string): Promise<void>;
}
