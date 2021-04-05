const express = require('express');
const app = express();
// const PORT = 3000 || process.env.PORT;
const PORT = 8080 || process.env.PORT;


app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


module.exports.app = app; // necessary?
