import { FastifyInstance } from 'fastify'
import { registerUserHandler } from '../controllers/UserController'

export async function userRoutes(app: FastifyInstance) {
    app.post('/users', registerUserHandler)
}
