const db = require('../db/index.js');

// GET
function queryGroceries(req, res) {
  db.query('SELECT * FROM groceries', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(`Error in queries GET: ${err}`);
    } else {
      res.status(200).send(results);
    }
  });
};

// POST
// SQL Query: INSERT INTO groceries (name, quantity) VALUES ('Milk', 2);
function insertOneGrocery(req, res) {
  const sqlString = 'INSERT INTO groceries (name, quantity) VALUES (?, ?)';
  const queries = [req.body.name, req.body.quantity];
  db.query(sqlString, queries, (err, results) => {
    if (err) {
      console.log(`Error in queries POST: ${err}`);
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

// TODO: refactor to include params
// PUT (update grocery item)
function updateGrocery(req, res) { // TODO: use req.params inside queries instead
  const sqlString = 'UPDATE groceries SET name = ? WHERE name = ?';
  const oldName = req.body.oldName.toString();
  const newName = req.body.newName.toString();
  const queries = [newName, oldName];
  console.log(`Changing: ${oldName} to ${newName}`)
  db.query(sqlString, queries, (err, results) => { // changes for all instances of name
    if (err) {
      console.log(`Error in queries PUT: ${err}`);
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
}; // will need to send updated info to front end

// OPTIONAL TODO: can refactor error-first functions to use promises

module.exports = {
  queryGroceries,
  insertOneGrocery,
  updateGrocery
};

// object destructuring
//   var {name, quantity, otherThing} = req.body
