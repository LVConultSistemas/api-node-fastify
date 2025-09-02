import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaUserRepository } from '@/infrastructure/repositories/PrismaUserRepository'
import { RegisterUser } from '@/application/services/RegisterUser'

export async function registerUserHandler(
    request: FastifyRequest<{ Body: { email: string; password: string } }>,
    reply: FastifyReply
) {
    const repo = new PrismaUserRepository()
    const useCase = new RegisterUser(repo)

    try {
        const user = await useCase.execute(
            request.body.email,
            request.body.password
        )
        return reply.code(201).send({ id: user.id, email: user.email })
    } catch (err) {
        return reply.code(400).send({ error: (err as Error).message })
    }
}
