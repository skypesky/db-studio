import { Request, Response, Router } from 'express';
import type { Knex } from 'knex';

const tableRouter = Router();

// tableRouter.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));

export interface TableRaw {
  type: 'table';
  name: string;
  tbl_name: string;
  rootpage: number;
  sql: string;
}

// @ts-expect-error
tableRouter.get('/list', async (req: Request & { instance: Knex }, res: Response) => {
  const tableRaws: TableRaw[] = await req.instance.raw("SELECT * FROM sqlite_master WHERE type='table'");
  const tables: string[] = tableRaws.map((raw: TableRaw): string => raw.name);
  return res.send({ tableRaws, tables });
});

export default tableRouter;
