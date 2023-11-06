//Server//

const server = Bun.serve({ 
    port:3000,
    fetch: async (request)=>{
        return new Response('Hello Pritam')
    }
});

console.log(`Listening on http://localhost:${server.port} ...`);