import type { NextFunction, Request } from 'express';
import knex, { Knex } from 'knex';

const getKnexInstance = (req: Request & { instance: Knex }, _res: Response, next: NextFunction) => {
  req.instance = knex({
    client: 'better-sqlite3',
    connection: {
      filename: '/Users/skypesky/tests/dev-server/data/did-spaces-core/did-spaces-core/db/did-storage.db',
    },
  });

  next();
};

export default getKnexInstance;
