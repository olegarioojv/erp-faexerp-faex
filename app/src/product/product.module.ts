import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product..controller'; 

// O módulo é como uma "caixa" que organiza tudo sobre produtos
// Dentro do módulo colocamos:
// - Controllers → quem recebe as requisições (portas de entrada)
// - Providers → serviços que fazem o trabalho pesado

@Module({
    imports: [], // aqui você coloca outros módulos caso precise
    controllers: [ProductController], // quem vai responder as requisições de produtos
    providers: [ProductService],      // quem faz a lógica de negócio dos produtos
})
export class ProductModule {}
