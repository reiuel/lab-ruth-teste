const express = require ('express');
const cors = require('cors');

const executaQuery = require('./dbconect');


const api = express();

api.use(cors())
api.use(express.json())
api.use(express.urlencoded({ extended: true}))

api.get('/nomes', (req, res)=>{
    let query = 'SELECT * FROM lab_ruth.contato';
    executaQuery(query, res);
})



api.listen(8080, ()=>{
    console.log('Api na porta 8080');
})
