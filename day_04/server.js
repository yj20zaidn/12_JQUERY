const http=require("http");
http.createServer((req,res)=>{
  res.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8",
    "Access-Control-Allow-Origin":"http://127.0.0.1:5500"
  })
  res.write(`北京 晴 5~21°`);
  res.end();
}).listen(3000);
//右键单击server.js，选择在终端/命令行中打开
//在弹出窗口中node server.js
//如果报端口错误，就关闭vscode，重新打开，重新运行node server.js
//打开浏览器，地址栏输入http://localhost:3000
//结果: 看到天气预报