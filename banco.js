const mysql = require('mysql2');

const conexao = mysql.createConnetion({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    databaase: 'lab_rut',

})


conexao.connect((erro)=>{
    if(erro){
        return console.log(erro);
    }
    console.log("Cinectado:0");
})