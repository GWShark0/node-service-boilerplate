require('dotenv').config();

const app = require('../app');

const { PORT } = process.env;

function onListening() {
  const { port } = this.address();
  console.log(`Listening on port ${port}`);
}

app.listen(PORT, onListening);
