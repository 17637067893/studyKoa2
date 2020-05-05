const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router()


let home = new Router();
		 //启动路由
home
	.get('/jspang', function (ctx, next) {
   	 ctx.body='home/jspang';
	})
	.get('/todo',(ctx,next)=>{

let page = new Router();	 
page
.get('/jspang', function (ctx, next) {
	 ctx.body='page/jspange';
})



//装载所有子路由

router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

let routerss = new Router();
           //   当前层级      上册路由   
   routerss.use("/gen",router.routes(),router.allowedMethods())
   
//加载路由中间件
app.use(routerss.routes()).use(routerss.allowedMethods());


app.listen('3000',(err) => {
	if(err) { 
			 throw err
	}
	 console.log('koa2 serve start')
})