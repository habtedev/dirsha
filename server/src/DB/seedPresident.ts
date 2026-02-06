import prisma from '../DB/prismaClient';
import bcrypt from 'bcrypt';

async function seedPresident() {
  const password = await bcrypt.hash('president123', 10); // Change as needed
  const email = 'president@gmail.com';

  // Ensure the President role exists
  let role = await prisma.role.findUnique({ where: { name: 'PRESIDENT' } });
  if (!role) {
    role = await prisma.role.create({ data: { name: 'PRESIDENT' } });
  }

  // Create the president user if not exists
  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password,
      name: 'University President',
      roleId: role.id,
    },
  });

  console.log('President user seeded:', user);
}

seedPresident().then(() => prisma.$disconnect());
