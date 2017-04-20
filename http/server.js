import bodyParser from 'koa-bodyparser'
import koa from 'koa'
import koaRouter from 'koa-router'
import sendFile from 'koa-sendfile'
import serve from 'koa-static'
import path from 'path'

// Instantiate koa and koa-router
const app = new koa()
const router = koaRouter()

// Enable default middleware
require('./middleware/DefaultMiddleware')(app)

// Enable bodyparser and router
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

// Serve routes
require('./routes')(router)

app.use(serve(path.join(__dirname, '../dist')))
app.use(async function (ctx, next) {
  await sendFile(ctx, path.join(__dirname, '../dist/index.html'))
  await next()
});

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Available on http://localhost:${ port }`)
})
