import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";

// Aqui estamos criando o controlador para usuários
// Controlador é como a porta de entrada da API para as requisições
@Controller('users')
export class UserController {
    
    // Injetamos o UserService para delegar a lógica de negócio
    constructor(private readonly userService: UserService) {}

    // Rota GET /user → retorna todos os usuários
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    // Rota GET /user/:id → retorna um usuário específico pelo ID
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }

    // Rota POST /user → cria um novo usuário
    // @Body() pega os dados enviados pelo cliente (nome, email, senha)
    @Post()
    create(@Body() createUsersDto: CreateUsersDto) {
        return this.userService.create(createUsersDto);
    }

    // Rota PUT /user/:id → atualiza um usuário pelo ID
    // @Body() pega os dados enviados para atualização
    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    // Rota DELETE /user/:id → deleta um usuário pelo ID
    @Delete(':id')
        delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id);
    }
}
