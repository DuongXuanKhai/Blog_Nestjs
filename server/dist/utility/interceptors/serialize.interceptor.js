"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeriallizeInterceptor = exports.Serialize = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const class_transformer_1 = require("class-transformer");
function Serialize(dto) {
    return (0, common_1.UseInterceptors)(new SeriallizeInterceptor(dto));
}
exports.Serialize = Serialize;
class SeriallizeInterceptor {
    constructor(dto) {
        this.dto = dto;
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            return (0, class_transformer_1.plainToClass)(this.dto, data, { excludeExtraneousValues: true });
        }));
    }
}
exports.SeriallizeInterceptor = SeriallizeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map