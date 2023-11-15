"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUserById = exports.listUsers = void 0;
var staticUsers = [
    {
        id: 1,
        name: 'Joyce Byers'
    },
    {
        id: 2,
        name: 'Firas Yahyaoui'
    },
    // ...
];
const listUsers = async (request, reply) => {
    Promise.resolve(staticUsers)
        .then((users) => {
        reply.send({ data: users });
    });
};
exports.listUsers = listUsers;
const getUserById = async (request, // Specify the type of request parameters
reply) => {
    const userId = parseInt(request.params.id, 10); // Parse the ID from the request parameters
    const user = staticUsers.find((u) => u.id === userId);
    if (user) {
        reply.send({ data: user });
    }
    else {
        reply.status(404).send({ message: "User not found" });
    }
};
exports.getUserById = getUserById;
const addUser = async (request, // Specify the type of request body
reply) => {
    var newUser;
    if (request.body.score) {
        newUser = {
            id: staticUsers.length + 1,
            name: request.body.name,
            score: request.body.score
        };
    }
    else {
        newUser = {
            id: staticUsers.length + 1,
            name: request.body.name,
        };
    }
    console.log(newUser);
    staticUsers.push(newUser);
    staticUsers = [...staticUsers];
    reply.status(201).send({ data: newUser, message: "User added successfully" });
};
exports.addUser = addUser;
// Attach the schema to the route
//addUser[Symbol.for('fastify-schemas')] = addUserSchema;
//# sourceMappingURL=user.controller.js.map