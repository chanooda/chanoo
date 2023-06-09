import { NextApiResponse, NextApiRequest } from 'next';
import prisma from '../../../libs/server/prisma';

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const series = await prisma.series.findMany();
    res.status(200).json({ message: 'success', status: 200, data: series });
  } catch (e) {
    console.error('Request error', e);
    res.status(500).json({ message: 'faild', status: 500 });
  }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  try {
    const series = await prisma.series.create({
      data: {
        name
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
