import { NextApiResponse, NextApiRequest } from 'next';

export type ReqMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type Handler<REQ, RES> = (req: NextApiRequest, res: NextApiResponse) => Promise<RES>;
export interface GlobalNextApiRequest<REQ> extends NextApiRequest {
  body: REQ;
}

export default async function globalHandler<REQ, RES>(
  req: NextApiRequest,
  res: NextApiResponse,
  method: ReqMethod[],
  handler: Handler<REQ, RES>
) {
  if (!method.includes(req.method as ReqMethod))
    res.json({ status: 405, message: '올바르지 않은 method' });
  else {
    handler(req, res);
  }
}
