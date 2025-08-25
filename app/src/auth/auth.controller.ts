import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth.login.dto";
import { AuthRegisterDTO } from "./dto/auth.register.dto";
import { AuthForgetDTO } from "./dto/auth.forget.dto";
import { AuthResetDTO } from "./dto/auth.reset.dto";
import { UserService } from "src/app/user/user.service";
import { AuthService } from "./auth.services";


@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService 
    ){}

    @Post('login')
    async login(@Body() { email, password } : AuthLoginDTO) {
        return this.authService.login(email, password);
    }

    @Post('register')
    async register(@Body() body: AuthRegisterDTO) {
        return this.authService.register(body);
    }

    @Post('forget')
    forget(@Body() { email } : AuthForgetDTO){
        return this.authService.forget(email);
    }

    @Post('reset')
    reset(@Body() { password, token} : AuthResetDTO) {
        return this.authService.reset(password, token);
    }
} 