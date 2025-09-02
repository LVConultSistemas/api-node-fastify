// src/main.ts
import Fastify from 'fastify'
import { userRoutes } from '@/presentation/routes/userRoutes'

async function bootstrap() {
    const app = Fastify({ logger: true })

    app.register(userRoutes, { prefix: '/api' })

    await app.listen({ port: 3000 })
    console.log('🚀 Server running on http://localhost:3000')
}

bootstrap()
