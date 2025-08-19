// Aqui estamos importando algumas “regras de validação” do NestJS
// Essas regras ajudam a garantir que os dados que a pessoa envia sejam do jeito certo
import { IsString, IsNumber, Min } from "class-validator";

// Aqui estamos criando uma "receita" de como um produto deve ser enviado
// Chamamos isso de DTO (Data Transfer Object) — é tipo um modelo de como os dados devem parecer
export class CreateProductsDto {

  // A primeira regra: o nome do produto deve ser uma string (texto)
  @IsString()
  name: string;

  // A segunda regra: o preço deve ser um número
  @IsNumber()

  // E o preço não pode ser negativo
  // Se alguém tentar mandar -5, o NestJS vai mostrar a mensagem: "O preço não pode ser negativo"
  @Min(0, { message: 'O preço não pode ser negativo' })
  price: number;
}
