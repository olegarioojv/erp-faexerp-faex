import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from "src/user/dto/create-users.dto";
import { CreateProductsDto } from "./dto/create-product.dto";
import { UpdateProductsDto } from "./dto/update-product.dto";

// O @Injectable() indica que essa classe pode ser "injetada" em outros lugares
// Ou seja, o controller pode usar esse service para fazer o trabalho pesado
@Injectable()
export class ProductService {

    // Método para listar todos os produtos
    findAll() {
        return 'Você está listando todos os produtos';
    }

    // Método para encontrar um produto pelo ID
    findOne(id: number) {
        return `Você está tentando encontrar o produto ${id}`;
    }

    // Método para criar um produto
    create(createProductDto: CreateProductsDto) {
        return createProductDto; // retorna o produto que foi enviado
    }

    // Método para atualizar um produto pelo ID
    update(id: number, updateProductDto: UpdateProductsDto) {
        return { id, updateProductDto }; // retorna o ID e os dados atualizados
    }

    // Método para deletar um produto pelo ID
    delete(id: number) {
        return `Você está apagando um produto id: ${id}`;
    }

    // Método que calcula o preço com desconto
    aplicarDesconto(preco: number, percentual: number): number {
        if (percentual < 0 || percentual > 100) {
            throw new Error('Percentual de desconto inválido'); // garante que o desconto seja válido
        }
        return preco - preco * (percentual / 100); // calcula o preço final
    }

    // Método que atualiza o preço do produto com desconto
    atualizarPrecoComDesconto(id: number, percentual: number, produto: CreateProductsDto) {
        const precoOriginal = produto.price; // pega o preço original do produto
        const precoComDesconto = this.aplicarDesconto(precoOriginal, percentual); // calcula o preço com desconto

        return {
            id,
            name: produto.name,
            precoOriginal,
            precoComDesconto // retorna o produto com o preço atualizado
        };
    }
}
