import { AuthService } from '@/auth/auth.service';
import {
  Controller,
  Get,
  Post,
  Render,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private readonly AuthService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  handleLogin(@Request() req): any {
    return this.AuthService.login(req.user);
  }
}
