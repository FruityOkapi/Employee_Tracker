const express = require('express');
const {initPrompt} = require('./lib/prompts')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Throws 404 error as default undefined error
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, async () => {
  await console.log(`Server started at http://localhost:${PORT} ( ͡° ͜ʖ ͡°)`);
  initPrompt();
})