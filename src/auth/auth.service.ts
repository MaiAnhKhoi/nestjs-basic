import { UsersService } from '@/users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isPasswordValid = this.usersService.isValidPassword(
        pass,
        user.password,
      );
      if (isPasswordValid) {
        return user;
      }
    }
    return null;
  }
}
