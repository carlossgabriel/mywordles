import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, email, password } = req.body;

  const userFound = await prisma.user.findFirst({
    where: { email },
  });

  if (!userFound) {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    res.json(user);
  } else {
    res.status(400).json({ error: "User already exists" });
  }
}
