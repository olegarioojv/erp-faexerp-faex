// Importa a ajudinha PartialType do NestJS
import { PartialType } from "@nestjs/mapped-types";

// Importa o DTO de criação de usuário
import { CreateUsersDto } from "./create-users.dto";

// Aqui estamos criando o DTO para atualizar um usuário
// Chamamos de UpdateUserDto
export class UpdateUserDto extends PartialType(CreateUsersDto) {
    
}
