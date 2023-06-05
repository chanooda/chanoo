import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '../../../libs/server/prisma';

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const { tagId, seriesId } = req.query;

  console.log(tagId);

  try {
    const writes = await prisma.writes.findMany({
      include: {
        series: true,
        writeTags: {
          include: {
            tags: true
          }
        }
      },
      where: {
        AND: {
          ...(tagId && {
            writeTags: {
              some: {
                tagId: {
                  equals: Number(tagId)
                }
              }
            }
          }),
          ...(seriesId && {
            seriesId: Number(seriesId)
          })
        }
      }
    });
    res.status(200).json({ message: 'success', status: 200, data: writes });
  } catch (e) {
    console.error('Request error', e);
    res.status(500).json({ message: 'faild', status: 500 });
  }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const { title, content, seriesId, tagsId } = req.body;
  try {
    prisma.$transaction(async (tx) => {
      const write = await tx.writes.create({
        data: {
          title,
          content,
          seriesId
        }
      });
      if (write && tagsId) {
        const writesTags = await tx.writesTags.createMany({
          data: tagsId.map((tagId: string) => ({
            tagId,
            writeId: write.id
          }))
        });
      }
    });

    res.status(200).json({ status: 200, message: 'success' });
  } catch (e) {
    console.error('Request Error', e);
    res.status(500).json({ message: 'faild', status: 500 });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') getHandler(req, res);
  else if (method === 'POST') postHandler(req, res);
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.json({ message: `${method}는 올바르지 않는 method 입니다.`, status: 405 });
  }
}
