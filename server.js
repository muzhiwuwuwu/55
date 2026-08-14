const express = require('express');
const app = express();

// Railway 会自动注入 PORT 环境变量
const PORT = process.env.PORT || 3000;

// 解析 json 请求体
app.use(express.json());

// 测试首页接口
app.get('/', (req, res) => {
  res.send('✅ Railway Node 服务器运行正常！');
});

// 示例接口
app.get('/api/hello', (req, res) => {
  res.json({
    code: 200,
    msg: 'Hello from Railway Server',
    time: new Date().toLocaleString()
  });
});

// 启动服务器，必须 0.0.0.0，不能写 127.0.0.1
app.listen(PORT, '0.0.0.0', () => {
  console.log(`服务器启动成功，端口：${PORT}`);
});