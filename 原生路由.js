const Koa = require('koa');
const app = new Koa();
const fs = require('fs')
app.use(async (ctx) => {
	let url = ctx.request.url;
	let html =await route(url);
	ctx.body = html;
})

function render(url){
	return new Promise((res,rej) => {
		let pageUrl = `./page/${url}`;
		fs.readFile(pageUrl,'binary',(err,data) => {
		   if(err){ rej(err) }else{
			   console.log(data)
			   res(data)
		   }	
		})
	})
}

async function route (url){
	let page = '';
    switch(url){
	   case '/todo':
	   page = 'todo.html'
	   break;
	   case '/404':
	   page = '404.html'
	   break;
	   case '/index':
	   page='index.html'
	   break;
	   default:
	   page="404.html"
	   break;
   }
   let html = await render(page);
   return html;
}

app.listen("3000",()=>{
	console.log('start')
})

