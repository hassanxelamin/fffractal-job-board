import { objectType, extendType, stringArg } from 'nexus';

export const Users = objectType({
  name: 'Users',
  definition(t) {
    t.string('id');
    t.string('email');
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
        });
      },
    });
  },
});
