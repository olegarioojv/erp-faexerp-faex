import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/app/user/user.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDTO } from "./dto/auth.register.dto";
import { User } from "@prisma/client";


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly prismaService:
            PrismaService,
        private readonly userService:
            UserService
    ) { }

    async createToken(user: User) {
  return {
    accessToken: this.jwtService.sign(
      {
        sub: user.id, 
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '7d',  
        issuer: 'login',
        audience: 'users',
      },
    ),
  };
}

    async checkToken() {

    }

    async login(email: string, password: string) {
        const user = await this.prismaService.user.findFirst({
            where: {
                email,
                password
            }
        })

        if (!user) {
            throw new UnauthorizedException
                ('Email e/ou senha incorretos!');
        }

        return this.createToken(user);

    }

    async forget(email: string) {

        const user = await this.prismaService.user.findFirst({
            where: {
                email
            }
        })

        if (!user) {
            throw new UnauthorizedException
                ('Email está incorreto!');
        }

        // TO DO: fazer disparo de email(proxima aula)

        return user;

    }

    async reset(password: string, token: string) {

        // To DO: validar o token JWT

        const id = 1;

        const user = await this.prismaService.user.update({

            where: {
                id
            },
            data: {
                password
            }
        })

        return this.createToken(user);
    }

    async register(data: AuthRegisterDTO) {
        const user = await this.userService.create(data);

        return this.createToken(user);
    }
}