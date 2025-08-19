// Aqui estamos importando uma ajudinha do NestJS chamada PartialType
import { PartialType } from "@nestjs/mapped-types";

// E também estamos trazendo o modelo do produto que criamos antes
import { CreateProductsDto } from "./create-product.dto";

// Aqui estamos criando o modelo para atualizar um produto
// Chamamos isso de DTO de atualização (UpdateProductsDto)
// O PartialType faz algo mágico: ele pega todas as regras do CreateProductsDto
// e deixa elas **opcionais**. Ou seja, você não precisa mandar todos os campos quando atualizar
export class UpdateProductsDto extends PartialType(CreateProductsDto) {
  
}
