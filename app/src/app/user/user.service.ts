import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";
import { PrismaService } from "src/prisma/prisma.service";

// O @Injectable() indica que essa classe pode ser "injetada" em outros lugares
// Ou seja, o controller pode usar esse serviço para fazer o trabalho pesado
@Injectable()
export class UserService {

    constructor(private prismaService: PrismaService) {}

    // Método para listar todos os usuários
    async findAll() {
      return this.prismaService.user.findMany();
    }

    // Método para buscar um usuário específico pelo ID
    async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createUserDto: CreateUsersDto) {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

    async update(id: number, updateUserDto: UpdateUserDto) {
    // Verifica se o usuário existe
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`O usuário ID ${id} não foi encontrado`);
    }

    // Atualiza o usuário
    return this.prismaService.user.update({
      data: updateUserDto,
      where:  {
        id,
      },
    });
  }

  async delete(id: number) {
    
  await this.userExists(id);

  return this.prismaService.user.delete({
    where: {
      id,
    },
  });
}

  async userExists(id: number) {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`O usuário ID ${id} não foi encontrado!`);
    }
  }
}