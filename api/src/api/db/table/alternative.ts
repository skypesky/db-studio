import type { Request, Response } from 'express';
import type { Knex } from 'knex';

export default function alternative(req: Request & { instance: Knex }, res: Response) {
  return res.send({ ok: !req });
}
