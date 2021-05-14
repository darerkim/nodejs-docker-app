const express = require('express');
const PORT = 8080;
// const HOST = '0.0.0.0';

//APP
const app = express();
app.get('/',(req,res) => {
  res.send('hello 섹스 반가워요 zz kill 2')
});

app.listen(PORT);
console.log('%cserver.js line:12 `${PORT}`', 'color: #007acc;', `${PORT}`);
