import z from 'zod';
import { publicProcedure, router } from '../trpc';

export const user = router({
 getUsers: publicProcedure.query(() => {
  return [
   {name:'ogel',race:'nigger'}
  ]
 }),
 addUser: publicProcedure.input(z.object({ name: z.string(), race: z.string() }))
  .mutation((opts) => {
   const { input } = opts;
   //todo call prisma add user method
  }),
})
