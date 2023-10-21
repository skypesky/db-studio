import type { NextFunction, Request } from 'express';
import knex, { Knex } from 'knex';

export interface RequestWithInstance extends Request {
  instance: Knex;
}

const getKnexInstance = (req: RequestWithInstance, _res: Response, next: NextFunction) => {
  req.instance = knex({
    client: 'better-sqlite3',
    connection: {
      filename: '/Users/skypesky/tests/dev-server/data/did-spaces-core/did-spaces-core/db/did-storage.db',
    },
  });

  next();
};

export default getKnexInstance;
