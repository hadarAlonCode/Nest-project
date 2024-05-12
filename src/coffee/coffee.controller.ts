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
import { PaginationQueryDto } from './dto/pagination-query.dto/pagination-query.dto';
import { Public } from '../common/decorators/public.decorator';
import { ParseIntPipe } from '../common/pipes/parse-int/parse-int.pipe';
import { Protocol } from '../common/decorators/protocol.decorator';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('coffee')
@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Public()
  @Get()
  findAll(
    @Protocol('https')
    @Query()
    paginationQuery: PaginationQueryDto,
  ) {
    return this.coffeeService.findAll(paginationQuery);
    // response.status(200).send('this return all coffee text');
  }

  @Public()
  @Get('pagination')
  pagination(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `this action return all coffees. limit: ${limit}, offset: ${offset}`;
  }

  @Public()
  @Get(':id')
  getParam(@Param('id', ParseIntPipe) id: string) {
    return this.coffeeService.findOne(id);
    // return `this is #${id} coffee`;
  }

  @Public()
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  @Public()
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
    // return `this action update #${id} coffee`;
  }

  @Delete(':id')
  @Public()
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
    // return `this action removes #${id} coffee`;
  }
}
