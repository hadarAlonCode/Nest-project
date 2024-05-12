import { Coffee } from 'src/coffee/entities/coffee.entity';
import { Flavor } from 'src/coffee/entities/flavor.entity/flavor.entity';
import { CoffeeRefactor1715189373452 } from 'src/migrations/1715189373452-CoffeeRefactor';
import { SchemaSync1715189854667 } from 'src/migrations/1715189854667-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1715189373452, SchemaSync1715189854667],
});
