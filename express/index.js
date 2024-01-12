
const express = require('express');
const app = express();

const port = 8163;

app.use(express.json())

app.get('/', (req,res) => {
  
  res.send('Hello word')
})

app.listen(port, () => {
  console.log(`server:localhost:${port}`)
})