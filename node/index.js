const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'

}
const connection = mysql.createConnection(config)

app.get('/', (req,res) => {
    const sql = `SELECT * FROM people`;  
    
    connection.query(sql, (error, results) => {
      if (error) {
        throw error
      };
      
      let table = '<table>';
      
      table += '<tr><th>#Id</th><th>Name</th></tr>';
      
      for(let people of results) {      
        table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
      }
  
      table += '</table>';    
      res.send('<h1>Full Cycle Rocks!</h1>' + table);    
    });   
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})