import { FastifyReply, FastifyRequest } from "fastify"
import { IUser } from "interfaces"

var staticUsers: IUser[] = [
  {
	id: 1,
	name: 'Joyce Byers'
  },
  {
	id: 2,
	name: 'Firas Yahyaoui'
  },
// ...
]

export const listUsers = async (
 request: FastifyRequest, 
 reply: FastifyReply) => {

  Promise.resolve(staticUsers)
  .then((users) => {
	reply.send({ data: users })
  })
}

export const getUserById = async (
    request: FastifyRequest<{ Params: { id: string } }>, // Specify the type of request parameters
    reply: FastifyReply
  ) => {
    const userId = parseInt(request.params.id, 10); // Parse the ID from the request parameters
    const user = staticUsers.find((u) => u.id === userId);
  
    if (user) {
      reply.send({ data: user });
    } else {
      reply.status(404).send({ message: "User not found" });
    }
};


export const addUser = async (
    request: FastifyRequest<{ Body: { name: string; score?: number } }>, // Specify the type of request body
    reply: FastifyReply
  ) => {
    var newUser: IUser
    if (request.body.score) {
        newUser = {
            id: staticUsers.length + 1,
            name: request.body.name,
            score: request.body.score
        };
    } else {
        newUser = {
            id: staticUsers.length + 1,
            name: request.body.name,
        };
    }
    
    console.log(newUser)
    staticUsers.push(newUser);
    staticUsers = [...staticUsers];
  
    reply.status(201).send({ data: newUser, message: "User added successfully" });
  };