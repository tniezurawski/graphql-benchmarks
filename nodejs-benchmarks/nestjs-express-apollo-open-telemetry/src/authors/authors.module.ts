import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsQueries } from './authors.queries';

@Module({
  providers: [AuthorsResolver, AuthorsService, AuthorsQueries],
})
export class AuthorsModule {}
