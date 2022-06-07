/* eslint-disable prettier/prettier */
import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: Prisma.BookUncheckedCreateInput) {
    return this.prisma.book.create({
      data: createBookDto,
    });
  }

  findAll() {
    return this.prisma.book.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(bookWhereUniqueInput: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.findUnique({ where: bookWhereUniqueInput });
  }

  update(where: Prisma.BookWhereUniqueInput, data: Prisma.BookUpdateInput) {
    return this.prisma.book.update({
      data,
      where,
    });
  }

  remove(where: Prisma.BookWhereUniqueInput) {
    return this.prisma.book.delete({
      where,
    });
  }
}
