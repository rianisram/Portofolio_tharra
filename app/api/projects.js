
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching projects', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
