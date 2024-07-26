import { NestFactory } from '@nestjs/core';

import { ServerModule } from './server.module.js';

const app = await NestFactory.create(ServerModule);
await app.listen(8080);
