import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_MODE: z.literal('test').optional(),
  },

  shared: {
    NODE_ENV: z.enum(['test', 'development', 'production']),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE,
  },
});