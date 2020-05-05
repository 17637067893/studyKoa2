const Koa = require("koa");
const app = new Koa();



// ctx 上下文对象
app.use(async(ctx)=>{
    let url = ctx.url;
    //前端发送的请求都在request中保存
    let request = ctx.request
    // 从request获取get请求
    // requery 返回的是格式化好的参数对象
   // let re_query = request.query;
    //querString 返回时的请求的字符串
    // let re_reuerystring = request.querystring;

    
    //从头上下文获取get请求
    let re_query = ctx.query;
    //querString 返回时的请求的字符串
    let re_reuerystring = ctx.querystring;

    ctx.body={
        url,
        re_query,
        re_reuerystring
    }
})

app.listen("3000",() => {
    console.log("服务start")
})