import middleware from '@blocklet/sdk/lib/middlewares';
import { Request, Response, Router } from 'express';
import type { Knex } from 'knex';

const tableRouter = Router();

tableRouter.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));

// @ts-expect-error
tableRouter.get('/list', async (req: Request & { instance: Knex }, res: Response) => {
  const tableRaws = await req.instance.raw("SELECT * FROM sqlite_master WHERE type='table'");
  const tables = tableRaws.map((row: any) => row.name);
  return res.send({ tableRaws, tables });
});

export default tableRouter;
