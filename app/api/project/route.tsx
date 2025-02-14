import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    return Response.json(projects);
  } catch (error) {
    return Response.json({ message: 'Error fetching projects', error }, { status: 500 });
  }
}

