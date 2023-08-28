import { Router } from 'express';

import tableRouter from './table';

const dbRouter = Router();

dbRouter.use('/table', tableRouter);

export default dbRouter;
