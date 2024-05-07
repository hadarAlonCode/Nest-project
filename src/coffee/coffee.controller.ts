import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  // Res,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get()
  getAll() {
    return this.coffeeService.findAll();
    // response.status(200).send('this return all coffee text');
  }

  @Get('pagination')
  pagination(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `this action return all coffees. limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  getParam(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
    // return `this is #${id} coffee`;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
    // return `this action update #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
    // return `this action removes #${id} coffee`;
  }
}
