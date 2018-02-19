const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
  ctx.body = 'Good Morning!';
});

app.listen(3000);