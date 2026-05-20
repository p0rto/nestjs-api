/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findById(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(user: User) {
    console.log('user', user);
    return this.prismaService.user.create({
      data: user as any,
    });
  }
}
