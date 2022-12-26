import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function jobDetails(req, res) {
  // const {
  //   query: { id },
  // } = req;

  const queryID = req.body.data.id;

  async function getSingleJob(id: string) {
    const job = await prisma.post.findUnique({
      where: {
        id: `${id}`,
      },
    });

    const jobs = JSON.parse(JSON.stringify(job));

    return jobs;
  }

  const details = await getSingleJob(queryID);

  res.status(200);
  res.json(details);
}
