const express = require('express')
const app = express()
const port = 3000

var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'database',
  user     : 'usr',
  password : 'root',
  database : 'cadastro'
});

app.get('/', (req, res) => {
  const names = ['Fulano', 'Ciclano', 'Beltrano', 'Maria', 'João'];
  const randomName = names[Math.floor(Math.random() * names.length)];

  pool.query('INSERT INTO people (name) VALUES (?)', [randomName],function (error, results, fields) {
    if (error) throw error;
    console.log(`Inserted ${randomName}`);  
    pool.query('SELECT * FROM people', function (error, results, fields) {
      if (error) throw error;
       res.send(
          '<h1>FullCycle Rocks!</h1><h2>People:</h2>' 
          + results.map(r => `<p>${r.name}</p>`).join('')
      );
  }); 
  });  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})