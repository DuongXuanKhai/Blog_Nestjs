"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserRolesDto = void 0;
const class_validator_1 = require("class-validator");
const user_roles_1 = require("../../utility/user-roles");
class UpdateUserRolesDto {
}
exports.UpdateUserRolesDto = UpdateUserRolesDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'User id can not be null.' }),
    (0, class_validator_1.IsString)({ message: 'Id should be string.' }),
    __metadata("design:type", String)
], UpdateUserRolesDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Roles can not be null.' }),
    (0, class_validator_1.IsEnum)(user_roles_1.UserRoles, { each: true, message: 'Provided roles may be inaccurate.' }),
    (0, class_validator_1.IsArray)({ message: 'Roles formate is array.' }),
    (0, class_validator_1.ArrayMaxSize)(3, { message: 'Please, maximum three roles' }),
    __metadata("design:type", Array)
], UpdateUserRolesDto.prototype, "roles", void 0);
//# sourceMappingURL=update-role.dto.js.map