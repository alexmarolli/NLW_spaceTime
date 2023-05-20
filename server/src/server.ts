import Fastify from "fastify";
import { PrismaClient} from "@prisma/client";

const app = Fastify();
const prisma= new PrismaClient();

app.get('/hello',async () => {
    const users = await prisma.user.findMany();

    return users
})
app.listen({
    port:3333
}).then(()=>{
    console.log('HTTP server running on http://127.0.0.1:3333')
})