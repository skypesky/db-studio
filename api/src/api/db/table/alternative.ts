import type { Request, Response } from 'express';
import type { Knex } from 'knex';

export default async function alternative(req: Request & { instance: Knex }, res: Response) {
  const { name }: { name: string } = req.query as { name: string };

  const table = await req.instance(name).select();

  return res.send(table);
}
