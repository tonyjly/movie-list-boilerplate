const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
// const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, './../public')));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request was sent to ${req.url} and what method ${req.method}`);
  console.log('__dirname', path.join(__dirname, './../public'));
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
})


module.exports.app = app; // necessary?
