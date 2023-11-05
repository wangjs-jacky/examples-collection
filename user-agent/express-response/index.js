const app = require("express")();
const bodyParser = require("body-parser");
const cors = require('cors');

const text = `<h1>两只老虎爱跳舞</h1>

小兔子乖乖拔萝卜

我和小鸭子学走路

童年是最美的礼物`;

const PORT = 7000;


/* app.use(cors()); */

// 配置 body-parser 中间件
// Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// 配置 body-parser 中间件
// 解析： Content-Type: application/json
app.use(bodyParser.json());



/* 解析响应体：text/plain */
app.get("/a", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.end(text);
});

/* 解析响应体：text/plain */
app.get("/b", (req, res) => {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.end(text);
});

/* 下载文件 */
app.get("/c", (req, res) => {
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.set("Content-Disposition", "attachment; filename=song.txt");
  res.end(text);
});


/* POST请求测试 */
app.post("/d", (req, res) => {
  console.log("loginId", req.body.loginId); // 输出 "admin"
  console.log("loginPwd", req.body.loginPwd); // 输出 "123123"
  res.end("success");
});

app.listen(PORT, () => {
  console.log(`server started: ${PORT}`);
});
