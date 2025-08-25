import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './app/user/user.module';
import { ProductModule } from './app/product/product.module';
import { AdressModule } from './app/adress/adress.module';
import { UserService } from './app/user/user.service';
import { AuthModule } from './auth/auth.module';

// O AppModule é o módulo principal da aplicação
// Ele organiza e conecta todos os outros módulos, controllers e services
@Module({
  imports: [UserModule, ProductModule, AuthModule], // Aqui colocamos outros módulos que queremos usar
  controllers: [AppController],         // Controller principal da aplicação
  providers: [AppService],              // Service principal da aplicação
  exports: [],
})
export class AppModule {}
