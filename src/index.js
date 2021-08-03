const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "I'm running :)" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
