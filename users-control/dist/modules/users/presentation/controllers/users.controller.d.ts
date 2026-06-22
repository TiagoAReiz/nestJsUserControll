import type { IUsersService } from '../../domain/interfaces/users.service.interface';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: IUsersService);
    create(dto: CreateUserDto): Promise<import("../../domain/entities/user.entity").User>;
    findAll(): Promise<import("../../domain/entities/user.entity").User[]>;
    findOne(id: string): Promise<import("../../domain/entities/user.entity").User>;
    update(id: string, dto: UpdateUserDto): Promise<import("../../domain/entities/user.entity").User>;
    remove(id: string): Promise<void>;
}
