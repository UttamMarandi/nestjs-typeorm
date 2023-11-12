import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Comments } from 'src/items/entities/comment.entity';
import { Item } from 'src/items/entities/item.entity';
import { Listing } from 'src/items/entities/listing.entity';
import { Tag } from 'src/items/entities/tag.entity';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('MYSQL_HOST'), // MYSQL_HOST and MYSQL_PORT are env variables
  port: configService.getOrThrow('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'),
  migrations: ['migrations/**'],
  entities: [Item, Listing, Comments, Tag],
});
