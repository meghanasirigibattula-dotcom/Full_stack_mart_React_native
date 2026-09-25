const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Mart API is running');
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'meghana' && password === '1234') {
    return res.json({
      message: 'Login successful',
    });
  }

  return res.status(401).json({
    message: 'Invalid username or password',
  });
});
app.listen(3000, () => {
  console.log('Server running on port 3000');
});