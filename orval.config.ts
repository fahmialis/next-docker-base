import { defineConfig } from 'orval';

export default defineConfig({
  referral: {
    input: {
      target: 'http://172.18.242.152:30001/loyalty-service.swagger.json',
    },
    output: {
      client: 'react-query',
      mode: 'tags-split',
      namingConvention: 'camelCase',
      target: './app/_api',
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});
