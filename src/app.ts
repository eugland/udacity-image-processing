import express, { Application, Request, Response } from 'express';
import path from 'path';
import { morganMiddleware } from './controllers/loggingController';
import { IndexController } from './controllers/IndexController';
import { ResizeController } from './controllers/ResizeController';

export const app: Application = express();

// static part
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Controllers and Loggers
app.use('/', IndexController);
app.use('/resize', ResizeController);
app.use(morganMiddleware);

// page not found Controller
app.use((req: Request, res: Response) => {
  res.status(404);
  res.render('pageNotFound');
});
