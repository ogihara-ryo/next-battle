import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { body } = req;
    const game = await prisma.game.create({ data: JSON.parse(body) });
    res.json(game);
  }
};

export default handler;
