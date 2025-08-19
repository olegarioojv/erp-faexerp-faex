import { Injectable } from '@nestjs/common';

// O @Injectable() indica que essa classe pode ser usada em outros lugares
// Ou seja, outros controllers podem “chamar” esse serviço
@Injectable()
export class AppService {

  // Método que retorna uma mensagem simples
  getHello(): string {
    return 'Hello World!';
  }
}
