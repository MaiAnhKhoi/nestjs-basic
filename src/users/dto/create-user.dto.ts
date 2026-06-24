import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @IsNotEmpty()
  password: string;
  name: string;
  address: string;
}
