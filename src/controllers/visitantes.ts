import { Request, Response } from 'express';

async function getHello(req: Request, res: Response) {
  res.status(200).json({
    message: 'Hello!',
  });
}

async function postHello(req: Request, res: Response) {
  res.status(200).json({
    message: `Hello!`,
    youData: req.body,
  });
}

export default {
  getHello,
  postHello,
};
