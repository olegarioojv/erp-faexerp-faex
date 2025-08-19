import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";

// O @Injectable() indica que essa classe pode ser "injetada" em outros lugares
// Ou seja, o controller pode usar esse serviço para fazer o trabalho pesado
@Injectable()
export class UserService {

    // Método para listar todos os usuários
    findAll() {
        return 'Você está listando todos os usuários';
    }

    // Método para buscar um usuário específico pelo ID
    findOne(id: number) {
        return `Você está tentando encontrar o usuário ${id}`;
    }

    // Método para criar um novo usuário
    create(createUsersDto: CreateUsersDto) {
        return createUsersDto; // retorna o usuário enviado
    }

    // Método para atualizar um usuário pelo ID
    update(id: number, updateUserDto: UpdateUserDto) {
        return { id, updateUserDto }; // retorna o ID e os dados atualizados
    }

    // Método para deletar um usuário pelo ID
    delete(id: number) {
        return `Você está apagando um usuário id: ${id}`;
    }
}
