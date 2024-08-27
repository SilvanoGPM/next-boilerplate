import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const nodeEnv = z.enum(['development', 'production', 'test']);

export const env = createEnv({
  client: {},

  shared: {
    NODE_ENV: nodeEnv,
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
});
