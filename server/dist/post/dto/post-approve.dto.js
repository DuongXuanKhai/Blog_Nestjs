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
exports.PostApproveDto = void 0;
const class_validator_1 = require("class-validator");
class PostApproveDto {
}
exports.PostApproveDto = PostApproveDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'approve can not be empty.' }),
    (0, class_validator_1.IsBoolean)({ message: 'approve should be boolean' }),
    __metadata("design:type", Boolean)
], PostApproveDto.prototype, "approve", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'ids can not be empty.' }),
    (0, class_validator_1.IsArray)({ message: 'ids should be in array format.' }),
    __metadata("design:type", Array)
], PostApproveDto.prototype, "ids", void 0);
//# sourceMappingURL=post-approve.dto.js.map