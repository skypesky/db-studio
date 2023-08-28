import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';

import dbRouter from './db';

const apiRouter = Router();

apiRouter.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));

apiRouter.use('/db', dbRouter);

export default apiRouter;
