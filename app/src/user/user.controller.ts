import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";

    @Controller ('user')

    export class UserController {
        constructor(private readonly userService: UserService)
        {

        }

        // Rota GET para fazer a busca de todos os usuários
        @Get ()
        findAll()
        {
            return this.userService.findAll(); 
        }

        // Rota GET para fazer a busca do usuário pelo ID
        @Get(':id')
        findOne(@Param('id') id: number) 
        {
            return this.userService.findOne(id);
        }
        
        // Rota POST para cadastrar um novo usuário
        @Post()
        create(@Body() createUsersDto: CreateUsersDto)
        {
            return this.userService.create(createUsersDto);
        }

        @Put(':id')
        update(@Param('id') id:number, @Body() updateUserDto: UpdateUserDto)
        {
            return this.userService.update(id, updateUserDto);
        }

        @Delete(':id')
        delete(@Param('id') id:number)
        {
            return this.userService.delete(id);
        }

    }
                