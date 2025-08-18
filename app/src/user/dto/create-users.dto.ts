import { IsEmail, IsString, IsStrongPassword, minLength } from "class-validator";

export class CreateUsersDto 
{
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword({
        minLength: 6,
    })
    password: string;
}
