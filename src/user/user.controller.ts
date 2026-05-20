import { Body, Controller, Post } from '@nestjs/common';
import type User from './user.entity';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {
  constructor(private repository: UserRepository) {}
  @Post()
  async create(@Body() user: User) {
    const newUser = await this.repository.create(user);
    return newUser;
  }
}
