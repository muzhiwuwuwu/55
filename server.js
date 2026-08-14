const express = require('express');
const app = express();

// 重点！读取 Railway 自动给的 PORT 环境变量，不要写死8080
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Railway Node 服务器运行正常！');
});

app.get('/api/hello', (req, res) => {
  res.json({
    code: 200,
    msg: 'Hello from Railway Server',
    time: new Date().toLocaleString()
  });
});

// 必须监听 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
  console.log(`服务器启动成功，端口：${PORT}`);
});
