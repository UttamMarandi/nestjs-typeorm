import { CreateTagDto } from '../entities/create-tag.dto';
import { CreateListingDto } from './create-listing.dto';

export class CreateItemDto {
  name: string;
  public: boolean;
  listing: CreateListingDto;
  tags: CreateTagDto[];
}
