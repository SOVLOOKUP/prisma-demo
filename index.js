const { PrismaClient, DateTimeFilter  } = require('@prisma/client')
const Koa = require('koa');

const prisma = new PrismaClient()
const app = new Koa();

function bl(num) {
  if (num < 10) {
    return "0" + num
  } else return num
}

async function getPeople() {
    const date = new Date()
    const dateNow = `${date.getFullYear()}-${bl(date.getMonth() +1)}-${bl(date.getDate())}`
    return await prisma.ban.findFirst({where:{date:{equals:new Date(dateNow)}}})
}

app.use(async ctx => {
  ctx.body = await getPeople();
});

app.listen(3000);
