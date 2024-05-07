import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Rosttar',
      brand: 'brandy',
      flavors: ['chocolate, vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new HttpException(`coffee #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, createCoffeeDto: any) {
    const existingCoffeeIndex = this.coffees.findIndex(
      (coffee) => coffee.id === +id,
    );

    if (existingCoffeeIndex !== -1) {
      const updatedCoffee = { ...this.coffees[existingCoffeeIndex] };

      for (const key in createCoffeeDto) {
        // Check if the property exists on the updatedCoffee object
        if (updatedCoffee[key] !== undefined) {
          updatedCoffee[key] = createCoffeeDto[key];
        }
      }

      this.coffees[existingCoffeeIndex] = updatedCoffee;
      return updatedCoffee;
    }
  }

  remove(id: string) {
    const existingCoffeeIndex = this.coffees.findIndex(
      (coffee) => coffee.id === +id,
    );

    if (existingCoffeeIndex !== -1) {
      this.coffees.splice(existingCoffeeIndex, 1);
    }
  }
}

//creating basic service - step
