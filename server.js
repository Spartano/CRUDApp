const express = require('express');
app = express();
port = process.env.PORT || 3000;

app.get('/', (req, res) =>  {
  res.send('Hello, i am the app')
})

app.listen(port, () => {
  console.log(`apspListening on http://localhost:${port}`)
})
