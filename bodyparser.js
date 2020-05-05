const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(async(ctx) => {
	  if(ctx.url === '/' && ctx.method === "GET"){
	        //根目录显示登录
	        let html=`
	        <form action="/" method="POST">
	            <p>userName</p>
	            <input type="text" name="userName"><br/>
	            <p>page</p>
	            <input name="age"><br/>
	            <p>website</p>
	            <input type="text" name="website"><br/>
	            <button type="submit">submit</button>
	        </form>`;
	        ctx.body = html;
	        //当请求时POST请求时
	    }else if(ctx.url == '/' && ctx.method === 'POST'){
			let pastData= ctx.request.body;
			ctx.body = pastData;
			console.log(pastData)
	}
	
})


app.listen("3000")