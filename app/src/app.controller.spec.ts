import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Aqui estamos criando um conjunto de testes para o AppController
describe('AppController', () => {
  let appController: AppController;

  // Antes de cada teste, criamos um módulo de teste do NestJS
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // adiciona o controller que queremos testar
      providers: [AppService],       // adiciona o service que o controller usa
    }).compile();

    // Pegamos a instância do controller para usar nos testes
    appController = app.get<AppController>(AppController);
  });

  // Aqui criamos um conjunto de testes para a raiz do controller
  describe('root', () => {
    it('should return "Hello World!"', () => {
      // Verifica se o método getHello() retorna "Hello World!"
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
