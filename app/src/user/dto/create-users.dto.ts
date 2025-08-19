// Aqui estamos importando algumas “regras de validação” do NestJS
import { IsEmail, IsString, IsStrongPassword } from "class-validator";

// DTO (Data Transfer Object) para criar um usuário
// Ele é como um molde ou receita do que é necessário para criar um usuário
export class CreateUsersDto {

  // O nome do usuário precisa ser texto (string)
  @IsString()
  name: string;

  // O e-mail precisa ser um e-mail válido
  @IsEmail()
  email: string;

  // A senha precisa ser forte e ter no mínimo 6 caracteres
  // Se não tiver, o NestJS vai mostrar a mensagem definida
  @IsStrongPassword(
    { minLength: 6 }, 
    { message: 'A senha deve ter no mínimo 6 caracteres' }
  )
  password: string;
}
