import { UserRepository } from '@/domain/repositories/UserRepository'
import { User } from '@/domain/entities/User'
import bcrypt from 'bcryptjs'
import { randomUUID } from 'crypto'

export class RegisterUser {
    constructor(private userRepo: UserRepository) {}

    async execute(email: string, password: string): Promise<User> {
        const exists = await this.userRepo.findByEmail(email)
        if (exists) throw new Error('User already exists')

        const hash = await bcrypt.hash(password, 10)
        const user = new User(randomUUID(), email, hash)

        return this.userRepo.create(user)
    }
}
