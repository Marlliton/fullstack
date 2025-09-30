import { Injectable } from '@nestjs/common';
import { soma } from '@fullstack/core';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! A soma de 2+2 é ${soma(2, 2)}`;
  }
}
