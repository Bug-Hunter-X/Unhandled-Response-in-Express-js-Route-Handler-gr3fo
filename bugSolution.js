const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!'); // Added res.send() to send a response
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});