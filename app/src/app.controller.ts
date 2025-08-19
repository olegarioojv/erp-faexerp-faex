import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// O @Controller() indica que essa classe é um controlador do NestJS
// Controlador é a porta de entrada da aplicação, onde as requisições chegam
@Controller()
export class AppController {
  
  // Aqui injetamos o AppService, que é quem faz a lógica real
  constructor(private readonly appService: AppService) {}

  // Rota GET / → quando alguém acessar a raiz da aplicação, esse método é chamado
  @Get()
  getHello(): string {
    // Retorna o que o service nos entrega
    return this.appService.getHello();
  }
}
