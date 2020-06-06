const express = require("express")
const server = express()

//Pegar banco de dados
const db = require("./database/db")

// Template engine 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


server.use(express.static("public"))

//Habilitar o uso do req.body
server.use(express.urlencoded({ extended : true}))



server.get('/', (req, res) => {
    return res.render("index.html");       
})

server.get("/create-point", (req, res) => {
    //Recebe requisição para cadastro

    console.log(req.query)

    return res.render("create-point.html")
} )

server.post("/savepoint", (req, res) => {
    //Recebe requisição para cadastro

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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]   

    function afterInsertData(err){
        if(err){
             console.log(err)
             return res.send(" Erro no cadastro ")
        }
            console.log("Cadastrado com sucesso")
            console.log(this)

            return res.send("create-point.html", {saved : true})    
    }

    db.run(queryInsert, values, afterInsertData)
 
} )


server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "" ){
        
        return res.render("search-results.html", { total:0 })
    }
    //Buscando os registros no banco

    db.all(`SELECT * FROM places where city like '%${search}%' `, function(err, rows){
        if(err){
            console.log(err)
        }
        const total = rows.length

        return res.render("search-results.html", { places: rows, total })
    })

    
} )

server.listen(3000)



