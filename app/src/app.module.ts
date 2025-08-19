import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

// O AppModule é o módulo principal da aplicação
// Ele organiza e conecta todos os outros módulos, controllers e services
@Module({
  imports: [UserModule, ProductModule], // Aqui colocamos outros módulos que queremos usar
  controllers: [AppController],         // Controller principal da aplicação
  providers: [AppService],              // Service principal da aplicação
})
export class AppModule {}
