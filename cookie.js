const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router()


		 //启动路由
router
	.get('/indexs', function (ctx, next) {
		if(ctx.url === '/indexs'){
			ctx.cookie.set('name','熊明',{
				domain:'localhost' ,//域名
				maxAge:'10*60*1000',//有效期
				expires:'2050-5-20',//失效时间
				overwrite:true // 是否允许重写
			})
		}
		ctx.body = "cookie true"
	})
	.get('/todo',(ctx,next)=>{
	   if(ctx.cookies.get("熊明")){
		   ctx.body = ctx.cookie.get('熊明')
	   }else{
		   ctx.body = ctx.url
	   }
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