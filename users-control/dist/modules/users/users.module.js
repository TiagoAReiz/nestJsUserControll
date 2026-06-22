"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_typeorm_entity_1 = require("./infrastructure/persistence/entities/user.typeorm.entity");
const users_typeorm_repository_1 = require("./infrastructure/persistence/repositories/users.typeorm.repository");
const users_service_1 = require("./application/services/users.service");
const users_controller_1 = require("./presentation/controllers/users.controller");
const users_repository_interface_1 = require("./domain/interfaces/users.repository.interface");
const users_service_interface_1 = require("./domain/interfaces/users.service.interface");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_typeorm_entity_1.UserTypeormEntity])],
        controllers: [users_controller_1.UsersController],
        providers: [
            {
                provide: users_repository_interface_1.USERS_REPOSITORY,
                useClass: users_typeorm_repository_1.UsersTypeormRepository,
            },
            {
                provide: users_service_interface_1.USERS_SERVICE,
                useClass: users_service_1.UsersService,
            },
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map