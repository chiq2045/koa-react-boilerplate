const Koa = require('koa');
const server = new Koa();

const port = 3000;

server.use((ctx, next) => {
  ctx.body = 'Hello World';
});

server.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
