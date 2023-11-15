"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserSchema = void 0;
exports.addUserSchema = {
    body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: { type: 'string' },
        },
    },
};
//# sourceMappingURL=schema.js.map