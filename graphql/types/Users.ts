import { objectType, extendType, stringArg } from 'nexus';
import { Post } from './Post';

export const Users = objectType({
  name: 'Users',
  definition(t) {
    t.string('id');
    t.string('email');
    // t.list.field('posts', {
    //   type: Post,
    //   async resolve(_parent, _args, ctx) {
    //     return await ctx.prisma.post
    //       .findMany({
    //         where: {
    //           authorId: _parent.id,
    //         },
    //       })
    //   },
    // });
  },
});

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('getUsers', {
      type: 'Users',
      args: {
        email: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.user.findMany({
          where: {
            email: args.email,
          },
        })
      }
    })
  }
})