import type { Request, Response } from 'express';
import type { Knex } from 'knex';

export default async function alternative(req: Request & { instance: Knex }, res: Response) {
  const { name }: { name: string } = req.query as { name: string };

  const data = await req.instance(name).select();
  const columns = await req.instance(name).withSchema('');

  return res.send({ data, columns });
}
