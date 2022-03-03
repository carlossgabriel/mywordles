import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, description } = req.body;

  //TODO> Create User and Card
  // const cardCreated = await prisma.word.create({
  //   data: {
  //     word: title,
  //     markdown: description,
  //   },
  // });
}
