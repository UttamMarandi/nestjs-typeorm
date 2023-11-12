import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class Comments extends AbstractEntity<Comments> {
  @Column()
  content: string;

  @ManyToOne(() => Item, (item) => item.id)
  item: Item;
}
