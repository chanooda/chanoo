import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '../../../libs/server/prisma';

async function GetHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const folder = await prisma.folder.findMany({
      where: {
        parentId: null
      }
    });
    res.status(200).json({ message: 'success', status: 200, data: folder });
  } catch (e) {
    console.error('Request error', e);
    res.status(500).json({ message: 'faild', status: 500 });
  }
}

async function PostHandler(req: NextApiRequest, res: NextApiResponse) {
  const { name, parentId } = req.body;

  try {
    if (parentId) {
      const folder = await prisma.folder.create({
        data: {
          name,
          parent: {
            connect: {
              id: parentId
            }
          }
        }
      });
      res.status(200).json({ status: 200, message: 'success' });
    } else {
      const folder = await prisma.folder.create({
        data: {
          name
        }
      });
      res.status(200).json({ status: 200, message: 'success' });
    }
  } catch (e) {
    console.error('Request Error', e);
    res.status(500).json({ message: 'faild', status: 500 });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') GetHandler(req, res);
  else if (method === 'POST') PostHandler(req, res);
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.json({ message: `${method}는 올바르지 않는 method 입니다.`, status: 405 });
  }
}
