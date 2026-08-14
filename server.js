const express = require('express');
const app = express();

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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`服务器启动成功，端口：${PORT}`);
});
