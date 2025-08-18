import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";

@Injectable()
export class UserService 
{

    findAll()
    {
        return 'Você está listasndo todos os usuários';
    }

    findOne(id: number) {
        return `Você está tentando encontrar o usuário ${id}`;
    }

    create (createUsersDto: CreateUsersDto) 
    {
        return createUsersDto;
    }

    update (id: number, updateUserDto: UpdateUserDto) 
    {
        return { id, updateUserDto };
    }

    delete(id: number) 
    {
        return `Você está apagando um usuário id: ${id}`; 
    }
}