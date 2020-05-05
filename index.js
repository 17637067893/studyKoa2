const Koa = require("koa");
const app = new Koa();

app.use(async (ctx) => {
    ctx.body = "返回信息"
})

app.listen(3000,function(){
    console.log("服务启动")
})