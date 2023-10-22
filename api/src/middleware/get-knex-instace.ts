import type { NextFunction, Request, Response } from 'express';
import knex from 'knex';

const getKnexInstance = (req: Request, _res: Response, next: NextFunction) => {
  // @ts-expect-error
  req.instance = knex({
    client: 'better-sqlite3',
    connection: {
      filename: '/Users/skypesky/tests/dev-server/data/did-spaces-core/did-spaces-core/db/did-storage.db',
    },
  });

  next();
};

export default getKnexInstance;
