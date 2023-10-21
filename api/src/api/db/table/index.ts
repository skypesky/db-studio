import { Router } from 'express';

import alternative from './alternative';
import list from './list';

const tableRouter = Router();

// @ts-expect-error
tableRouter.get('/list', list);

// @ts-expect-error
tableRouter.get('/', alternative);

export default tableRouter;
