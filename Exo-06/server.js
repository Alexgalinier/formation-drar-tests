const koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new koa();
const router = new KoaRouter();

let posts = [];

router.get('/posts', ctx => {
  ctx.body = posts;
  ctx.status = 200;
});

router.post('/posts', ctx => {
  posts.push(ctx.request.body);

  ctx.body = ctx.request.body;
  ctx.status = 201;
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
console.log('Server started on port: 3000');
