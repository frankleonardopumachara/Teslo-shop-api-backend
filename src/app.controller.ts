import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "./common/models";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  async getHello(): Promise<Response<string>> {
    return
  }

  async getHello1(): Promise<Response<string>> {
    return {  };
  }
}
