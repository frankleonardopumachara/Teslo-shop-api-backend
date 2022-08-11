import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: "postgres",
        database: config.get<string>('DB_NAME'),
        host: config.get<string>('DB_HOST'),
        port: Number(config.get<number>('DB_PORT')),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        synchronize: Boolean(config.get<boolean>('DB_SYNCHRONIZE_ENTITIES')),
        autoLoadEntities: true,
        logging: true
      }),
      inject: [ConfigService]
    })
  ],
})
export class DatabaseModule {
}
