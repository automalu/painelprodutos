import express from 'express';
const app = express();

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Define a route for a specific path
app.get('/users', (req, res) => {
  const users = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
  ];
  res.json(users);
});

// Define a route for a specific path with a parameter
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = { name: 'John', email: 'john@example.com' };
  res.json(user);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
