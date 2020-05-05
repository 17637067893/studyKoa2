const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router()


		 //启动路由
router
	.get('/', function (ctx, next) {
		let obj = ctx.query;
   	 ctx.body=obj;
	})
	.post('/',(ctx,next)=>{
		let obj = ctx.query;
 	   ctx.body=obj
	 });


app
	.use(router.routes())
	 //allowedMethods用在routes之后，作用是根据ctx.status设置response header
	.use(router.allowedMethods())


app.listen('3000',(err) => {
	if(err) { 
			 throw err
	}
	 console.log('koa2 serve start')
})