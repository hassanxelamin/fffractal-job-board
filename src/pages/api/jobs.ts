import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        company,
        website,
        title,
        commitment,
        location,
        remote,
        urlOrEmail,
        description,
      } = req.body;

      const post = await prisma.post.create({
        data: {
          company,
          website,
          title,
          commitment,
          location,
          remote,
          urlOrEmail,
          description,
        },
      });

      res.status(200).json(post);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
