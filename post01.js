const Koa = require("koa");
const app = new Koa();

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
        let pastData=await parsePostData(ctx);
        ctx.body=pastData;
    }else{
        //其他显示404页面
        ctx.body = "<h1>404!</h1>";
    }
})


function parsePostData(ctx){
    return new Promise((resolve,reject) => {
        let postData =""
        //原生监听有数据传入 收集数据
        ctx.req.addListener("data",(data) => {
            postData += data
        })
        //监听没有数据传入 输出数据
        ctx.req.on('end',(res,err) => {
            if(err){
                reject(err)
            }else{
                let parseData = parseQueryData(postData)
                resolve(parseData)
            }
        })
    })
}

function parseQueryData(queryStr){
    let queryData={};
    let queryArr=queryStr.split("&");
    for(let [index,queryStr] of queryArr.entries()){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]]=decodeURIComponent(itemList[1]);
    }
    return queryData;
}


app.listen('3000',()=>{
    console.log('start')
})