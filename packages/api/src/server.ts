import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';
import { router } from './routes';

const app = new Koa();

const port = process.env.PORT ? process.env.PORT : 1337

app.use(bodyParser());
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);
