import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { CreateCommentDto } from './crete-comment.dto';

export class UpdateItemDto {
  public: boolean;
  comments: CreateCommentDto[];
}
