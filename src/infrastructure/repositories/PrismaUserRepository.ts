import { prisma } from '@/infrastructure/prisma/client'
import { User } from '@/domain/entities/User'
import { UserRepository } from '@/domain/repositories/UserRepository'

export class PrismaUserRepository implements UserRepository {
    async create(user: User): Promise<User> {
        const data = await prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                password: user.passwordHash,
            },
        })
        return new User(data.id, data.email, data.password)
    }

    async findByEmail(email: string): Promise<User | null> {
        const data = await prisma.user.findUnique({ where: { email } })
        return data ? new User(data.id, data.email, data.password) : null
    }
}
