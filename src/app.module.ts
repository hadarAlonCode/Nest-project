import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';

@Module({
  imports: [CoffeeModule],
  controllers: [AppController], //routes
  providers: [AppService], // responsible for providing various services and dependencies throughout your application
})
export class AppModule {}
