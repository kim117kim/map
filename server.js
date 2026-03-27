const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), { 
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
});

app.get('/honda', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), { 
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
