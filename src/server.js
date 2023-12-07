import { fastify } from "fastify";

const PORT = process.env.PORT;
const server = fastify();

server.get("/videos", () => {
  return "Hello World";
});

server.listen({
  port: PORT || 3000,
});
