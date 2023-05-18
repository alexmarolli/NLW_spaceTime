import fastify from "fastify";

const app = fastify();

app.get('hello',() =>{
    return 'Hello Word'
})
app.listen({
    port:3333
}).then(()=>{
    console.log('HTTP server running on http://127.0.0.1:3333')
})