const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router({
	//项目增加层级
	prefix:'/sfsdf'
})


		 //启动路由
router
	.get('/', function (ctx, next) {
   	 ctx.body='Hello';
	})
	.post('/todo',(ctx,next)=>{
 	   ctx.body='Todo'
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