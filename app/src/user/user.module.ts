import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

// Um módulo é como uma “caixa” que organiza tudo relacionado aos usuários
@Module({
    imports: [],                // Aqui você pode colocar outros módulos que esse módulo precisa
    controllers: [UserController], // O controlador que vai receber as requisições HTTP
    providers: [UserService],       // O serviço que vai cuidar da lógica de negócio
})
export class UserModule {}
