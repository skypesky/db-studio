import middleware from '@blocklet/sdk/lib/middlewares';
import { Request, Router } from 'express';

import getKnexInstance from '../middleware/get-knex-instace';
import dbRouter from './db';

const apiRouter = Router();

apiRouter.use('/user', middleware.user(), (req: Request, res: Response) => res.json(req.user || {}));

apiRouter.use('/db', getKnexInstance, dbRouter);

export default apiRouter;
