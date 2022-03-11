import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  giveIndex(): {} {
    return {
      message: "Blog Api with NestJs",
    };
  }
}
