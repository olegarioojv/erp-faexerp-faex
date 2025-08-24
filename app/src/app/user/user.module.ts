import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';

// Um módulo é como uma “caixa” que organiza tudo relacionado aos usuários
@Module({
    imports: [],                // Aqui você pode colocar outros módulos que esse módulo precisa
    controllers: [UserController], // O controlador que vai receber as requisições HTTP
    providers: [UserService, PrismaService],       // O serviço que vai cuidar da lógica de negócio
    exports: [UserService]       // O que esse módulo disponibiliza para outros módulos
})
export class UserModule {}
