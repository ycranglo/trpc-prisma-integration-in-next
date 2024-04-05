import { user } from './routers/userRouter';
import { router } from './trpc';

export const appRouter = router({
user,
})

export type AppRouter = typeof appRouter;