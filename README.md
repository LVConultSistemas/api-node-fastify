# api-node-fastify

# 📂 Estrutura de Pastas

Este projeto segue princípios de **Clean Architecture** e **Domain-Driven Design (DDD)** para manter o código **organizado, escalável e de fácil manutenção**.

src/
├── application/ # Casos de uso (use cases) / lógica de aplicação
│ ├── services/ # Serviços da camada de aplicação (orquestram regras de negócio)
│ └── dtos/ # Data Transfer Objects (entrada/saída dos casos de uso)
│
├── domain/ # Entidades e regras de negócio (Enterprise core)
│ ├── entities/ # Entidades puras, sem dependência de framework
│ └── repositories/ # Interfaces de repositórios (contratos de persistência)
│
├── infrastructure/ # Implementações técnicas (infraestrutura e externos)
│ ├── prisma/ # Configuração do Prisma (schema, client, migrations, seed)
│ ├── repositories/ # Implementações concretas dos repositórios (ex.: PrismaUserRepository)
│ └── http/ # Integrações com serviços externos via HTTP (APIs de terceiros)
│
├── presentation/ # Camada de apresentação (interface com o mundo externo)
│ ├── routes/ # Definição das rotas Fastify
│ └── controllers/ # Controllers que lidam com requisições e respostas
│
├── config/ # Configurações globais (env, logger, middlewares, plugins)
│
├── lib/ # Helpers, utilitários e adapters (ex.: mappers, validadores)
│
└── main.ts # Ponto de entrada da aplicação (bootstrap do servidor Fastify)

---

## 🔑 Benefícios desta estrutura

-   **Separação de responsabilidades** → cada camada tem um propósito único.
-   **Independência do domínio** → as regras de negócio não dependem de frameworks ou banco de dados.
-   **Facilidade de testes** → entidades e casos de uso podem ser testados isoladamente.
-   **Escalabilidade** → a adição de novos módulos não gera acoplamento desnecessário.
-   **Flexibilidade** → permite trocar banco (ex.: Prisma → TypeORM) ou servidor web (ex.: Fastify → Express) sem impactar o domínio.

---

## 📌 Fluxo de responsabilidade

1. **Presentation (entrada)** → recebe requisições HTTP e aciona casos de uso.
2. **Application (casos de uso)** → orquestra entidades, repositórios e serviços.
3. **Domain (regras de negócio)** → núcleo do sistema, independente de infraestrutura.
4. **Infrastructure (implementação)** → persistência, APIs externas, etc.
