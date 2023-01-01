import { objectType, extendType, stringArg } from 'nexus';

export const UserPosts = objectType({
  name: 'UserPosts',
  definition(t) {
    t.string('id');
    t.string('company');
    t.string('website');
    t.string('title');
    t.string('commitment');
    t.string('location');
    t.string('remote');
    t.string('urlOrEmail');
    t.string('description');
  },
});

export const UserPostsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('getUserPost', {
      type: 'UserPosts',
      args: {
        email: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            email: args.email,
          },
        })
        .posts();
      }
    })
  }
})