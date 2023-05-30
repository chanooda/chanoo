import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '../../../libs/server/prisma';

async function GetHandler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const folder = await prisma.folder.findFirst({
      where: {
        id: Number(id)
      },
      include: {
        child: true
      }
    });
    res.status(200).json({ message: 'success', status: 200, data: folder });
  } catch (e) {
    console.error('Request error', e);
    res.status(500).json({ message: 'faild', status: 500 });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') GetHandler(req, res);
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.json({ message: `${method}는 올바르지 않는 method 입니다.`, status: 405 });
  }
}
