const express = require('express');
const app = express();

// 使用 process.env.PORT 環境變數，如果沒有設定，預設為 3000
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});