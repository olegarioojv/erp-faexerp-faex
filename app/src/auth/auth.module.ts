import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/app/user/user.module";
import { AuthService } from "./auth.services";
import { PrismaService } from "src/prisma/prisma.service";


@Module({
        imports: [
            JwtModule.register({
            secret:'L&LZVVOhR]&V"Skj([9<$\E8})9kpISv',
        }),
            UserModule,
        ],
        providers:[AuthService, PrismaService],
        controllers: [AuthController]
    })

    export class AuthModule {} 