const dbSQLite3 = require("sqlite3").verbose()

const db = new dbSQLite3.Database("./src/database/database.db")

module.exports = db

/*
db.serialize(() => {

    // Criar a tabela
    db.run(` 
        CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image text,
        name text,
        address text,
        address2 text,
        state text,
        city text,
        items text
    );

    `)

    //inserir dados
    
    const queryInsert = `
    INSERT into places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items
        ) values(?,?,?,?,?,?,?);`
    

    const values =   [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim America",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]   

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
            console.log("Cadastrado com sucesso")
            console.log(this)
        
    }

    db.run(queryInsert, values, afterInsertData)

    // Consultar 
    db.all(`SELECT * FROM places`, function(err, rows){  
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão os seus registros")
        console.log(rows)
     })

    // Deletar

    db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
        if(err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })

    db.all(`SELECT * FROM places`, function(err, rows){  
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão os seus registros")
        console.log(rows)
     }) 

    }) */