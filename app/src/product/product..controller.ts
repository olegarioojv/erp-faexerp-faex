import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductsDto } from "./dto/create-product.dto";
import { UpdateProductsDto } from "./dto/update-product.dto";

// Aqui estamos criando um "controlador" para produtos
// Controlador é tipo a porta de entrada das requisições (API)
@Controller('product')
export class ProductController {
    
    // Aqui estamos dizendo que o controlador precisa do serviço de produtos
    constructor(private readonly productService: ProductService) { }

    // Rota GET /product → retorna todos os produtos
    @Get()
    findAll() {
        return this.productService.findAll();
    }

    // Rota GET /product/:id → retorna um produto específico pelo ID
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productService.findOne(id);
    }

    // Rota POST /product → cria um novo produto
    // @Body() pega os dados enviados no corpo da requisição
    @Post()
    create(@Body() createProductsDto: CreateProductsDto) {
        return this.productService.create(createProductsDto);
    }

    // Rota PUT /product/:id → atualiza um produto pelo ID
    @Put(':id')
    update(@Param('id') id: number, @Body() updateProductsDto: UpdateProductsDto) {
        return this.productService.update(id, updateProductsDto);
    }

    // Rota PUT /product/:id/desconto → aplica desconto no produto
    @Put(':id/desconto')
    aplicarDesconto(
        @Param('id') id: number,
        @Body() body: { name: string; price: number; percentual: number }, // pega name, price e percentual do body
    ) {
        const { name, price, percentual } = body;
        return this.productService.atualizarPrecoComDesconto(id, percentual, { name, price });
    }

    // Rota DELETE /product/:id → deleta um produto pelo ID
    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.delete(id);
    }
}
