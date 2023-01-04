import { objectType, extendType, stringArg, booleanArg, intArg } from 'nexus';

// --- OBJECT TYPES --- //

export const Post = objectType({
  name: 'Post',
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
    t.string('userId');
  },
});

export const Edge = objectType({
  name: 'Edge',
  definition(t) {
    t.string('cursor');
    t.field('node', {
      type: Post,
    });
  },
});

export const PageInfo = objectType({
  name: 'PageInfo',
  definition(t) {
    t.string('startCursor');
    t.string('endCursor');
    t.boolean('hasNextPage');
    t.boolean('hasPreviousPage');
  },
});

export const Response = objectType({
  name: 'Response',
  definition(t) {
    t.field('pageInfo', { type: PageInfo });
    t.list.field('edges', {
      type: Edge,
    });
  },
});

// --- QUERIES --- //

export const PostsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('getPosts', {
      type: 'Response',
      args: {
        first: intArg() || undefined,
        last: intArg() || undefined,
        after: stringArg() || undefined,
        before: stringArg() || undefined,
        keyword: stringArg() || undefined,
      },
      async resolve(_, args, ctx) {
        let queryResults = null;

        if (args.after) {
          // check if there is a cursor as the argument
          queryResults = await ctx.prisma.post.findMany({
            take: args.first, // the number of items to return from the database
            skip: 1, // skip the cursor
            cursor: {
              id: args.after, // the cursor
            },
          });
        } else if (args.before) {
          // check if there is a cursor as the argument
          queryResults = await ctx.prisma.post.findMany({
            take: args.last, // the number of items to return from the database
            skip: 1, // skip the cursor
            cursor: {
              id: args.before, // the cursor
            },
          });
        } else if (args.keyword) {
          // check if there is a cursor as the argument
          queryResults = await ctx.prisma.post.findMany({
            take: args.first, // the number of items to return from the database
            where: {
              title: {
                contains: args.keyword,
              },
            },
          });
        } else {
          // if no cursor, this means that this is the first request
          // and we will return the first items in the database
          queryResults = await ctx.prisma.post.findMany({
            take: args.first,
          });
        }
        // if the intitial request returns links
        if (queryResults.length > 0) {
          // get the last element in previos result set
          const firstLinkInResults = queryResults[0];
          const lastLinkInResults = queryResults[queryResults.length - 1];
          // cursor we'll return in subsequent requests
          const firstCursor = firstLinkInResults.id;
          const lastCursor = lastLinkInResults.id;

          const nextPageResults = await ctx.prisma.post.findMany({
            take: args.first,
            cursor: {
              id: lastCursor,
            },
          });
          // query after the cursor to check if we have nextPage
          const lastPageResults = await ctx.prisma.post.findMany({
            take: args.last,
            cursor: {
              id: lastCursor,
            },
          });

          // returns resonse
          const result = {
            pageInfo: {
              startCursor: firstCursor,
              endCursor: lastCursor,
              hasPreviousPage: lastPageResults.length < 6,
              hasNextPage: nextPageResults.length >= 6,
              // if the number of items requested is greater than the response
              // of the 2nd query, we have another page.
            },
            edges: queryResults.map((post: any) => ({
              cursor: post.id,
              node: post,
            })),
          };
          return result;
        }
        return null;
      },
    });
  },
});

export const SinglePostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('getSinglePost', {
      type: 'Post',
      args: {
        postId: stringArg(),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.post.findMany({
          where: {
            id: args.postId,
          },
        });
      },
    });
  },
});

// --- MUTATIONS --- //

export const CreatePostsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createPosts', {
      type: 'Post',
      args: {
        company: stringArg(),
        website: stringArg(),
        title: stringArg(),
        commitment: stringArg(),
        location: stringArg(),
        remote: booleanArg(),
        urlOrEmail: stringArg(),
        description: stringArg(),
        userId: stringArg(),
      },
      resolve(_parent, args, ctx) {
        try {
          return ctx.prisma.post.create({
            data: {
              company: args.company,
              website: args.website,
              title: args.title,
              commitment: args.commitment,
              location: args.location,
              remote: args.remote,
              urlOrEmail: args.urlOrEmail,
              description: args.description,
              author: { connect: { id: args.userId } },
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});

export const DeletePostsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('deletePost', {
      type: 'Post',
      args: {
        postId: stringArg(),
      },
      resolve(_parent, args, ctx) {
        try {
          return ctx.prisma.post.delete({
            where: {
              id: args.postId,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});

export const UpdatePostsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('updatePost', {
      type: 'Post',
      args: {
        company: stringArg(),
        website: stringArg(),
        title: stringArg(),
        commitment: stringArg(),
        location: stringArg(),
        remote: booleanArg(),
        urlOrEmail: stringArg(),
        description: stringArg(),
        userId: stringArg(),
      },
      resolve(_parent, args, ctx) {
        try {
          return ctx.prisma.post.update({
            data: {
              company: args.company,
              website: args.website,
              title: args.title,
              commitment: args.commitment,
              location: args.location,
              remote: args.remote,
              urlOrEmail: args.urlOrEmail,
              description: args.description,
            },
            where: {
              id: args.userId,
            },
          });
        } catch (error) {
          throw Error(`${error}`);
        }
      },
    });
  },
});
