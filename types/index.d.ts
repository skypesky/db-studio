declare module 'vite-plugin-blocklet';

declare module 'express-history-api-fallback';

declare module 'express-async-errors';

import type { Knex } from 'knex';

namespace Express {
  interface Request {
    user?: {
      did: string;
      role: string;
      fullName: string;
    };

    instance?: Knex;
  }
}
