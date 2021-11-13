import { PrismaClient } from '.prisma/client';

// prisma client
const client = new PrismaClient();

class Seeder {
  async seedUser() {
    const user = await client.user.create({
      data: {
        email: 'silkyland@gmail.com',
        password: '123456',
        name: 'Bundit Nuntates',
        role: 'ADMIN',
      },
    });
    console.log('User created: ', user);
  }
}

new Seeder().seedUser();
