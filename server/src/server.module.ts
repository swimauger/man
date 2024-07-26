import path from 'node:path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  controllers: [],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve('../client/out/browser')
    })
  ]
})
export class ServerModule {}
