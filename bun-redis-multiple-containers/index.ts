import { createClient } from 'redis';

const redis_client = createClient({
    url: 'redis://redis-server:6379'
});
await redis_client.connect();
await redis_client.set('visits', 0);

const server = Bun.serve({
    port: 8081,
    async fetch(request, server) {
        const visits = await redis_client.get('visits');
        await redis_client.set('visits', Number(visits)+1);
        return new Response(`Number of users ${visits}`)
    },
});

console.log(`Server is listening up on Port ${server.port}`);


