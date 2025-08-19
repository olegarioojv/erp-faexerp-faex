import { NestFactory } from '@nestjs/core'; // Importa a fábrica do NestJS para criar a aplicação
import { AppModule } from './app.module';    // Importa o módulo principal da aplicação
import { ValidationPipe } from '@nestjs/common'; // Importa um “caninho de validação” para validar dados

// Função principal que inicializa a aplicação
async function bootstrap() {
  // Cria a aplicação NestJS usando o AppModule
  const app = await NestFactory.create(AppModule);

  // Ativa validação global para todas as rotas
  // Isso faz com que todos os DTOs sejam validados automaticamente
  app.useGlobalPipes(new ValidationPipe());

  // Faz a aplicação ouvir na porta definida no .env ou na 3000 por padrão
  await app.listen(process.env.PORT ?? 3000);
}

// Chama a função bootstrap para iniciar o servidor
bootstrap();
