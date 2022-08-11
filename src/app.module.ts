import { Module, Scope } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { ProductsModule } from "./products/products.module";
import { UserModule } from "./user/user.module";
import { PhotoModule } from "./photo/photo.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { TransformInterceptor } from "./common/transform.interceptor";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    ProductsModule,
    UserModule,
    PhotoModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: TransformInterceptor,
    // }
  ]
})
export class AppModule {
}
