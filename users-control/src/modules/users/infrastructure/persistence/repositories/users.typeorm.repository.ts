import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUsersRepository } from '../../../domain/interfaces/users.repository.interface';
import { User } from '../../../domain/entities/user.entity';
import { UserTypeormEntity } from '../entities/user.typeorm.entity';

@Injectable()
export class UsersTypeormRepository implements IUsersRepository {
  constructor(
    @InjectRepository(UserTypeormEntity)
    private readonly repo: Repository<UserTypeormEntity>,
  ) {}

  async create(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }

  findAll(): Promise<User[]> {
    return this.repo.find();
  }

  findById(id: string): Promise<User | null> {
    return this.repo.findOne({ where: { id } });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }

  async update(id: string, data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>): Promise<User> {
    await this.repo.update(id, data);
    return this.repo.findOne({ where: { id } }) as Promise<User>;
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
