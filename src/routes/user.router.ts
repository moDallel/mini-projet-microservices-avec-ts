import { FastifyInstance } from 'fastify'
import * as controllers from '../controllers'
import { addUserSchema } from '../schemas/user.schema'

async function userRouter(fastify: FastifyInstance) {

  fastify.route({
	method: 'GET',
	url: '/',
	handler: controllers.listUsers,
  })

  fastify.route({
	method: 'GET',
	url: '/:id', // Include the parameter in the route
	handler: controllers.getUserById,
  })

  fastify.route({
	method: 'POST',
	url: '/addUser',
	schema: addUserSchema,
	handler: controllers.addUser,
  })
}

export default userRouter