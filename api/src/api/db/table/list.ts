import type { Response } from 'express';
import type { Knex } from 'knex';

export interface TableRaw {
  type: 'table';
  name: string;
  tbl_name: string;
  rootpage: number;
  sql: string;
}

export default async function list(req: Request & { instance: Knex }, res: Response) {
  const tableRaws: TableRaw[] = await req.instance.raw("SELECT * FROM sqlite_master WHERE type='table'");
  const tables: string[] = tableRaws.map((raw: TableRaw): string => raw.name);
  return res.send({ tableRaws, tables });
}
