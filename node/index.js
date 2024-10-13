const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'admin',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Adams')`
connection.query(sql)


app.get('/', (req, res) => {
    const sql = "SELECT name FROM people"; 
    connection.query(sql, (err, results) => {
        if (err) throw err;
        let nomes = "<h1>Full Cycle Rocks!</h1><ul>";
        results.forEach(row => {
            nomes += `<li>${row.name}</li>`;
        });
        nomes += "</ul>";
        res.send(nomes); 
    });
});

//connection.end()
/*app.get('/', (req, res) => {
    res.send('<h1>Node programando na minha máquina dentro do Docker</h1>');
});*/

app.listen(port, () => {
    console.log('Rodando na porta 3000');
})

