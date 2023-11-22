const port = 4000;

//Express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
const fs = require("fs");
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render("result"); //views/teste4.ejs
    resultado = ''
});
app.post("/teste4", (request, response) => {
    let nomeNoForm = request.body.nome
    let cadastro = { nome: nomeNoForm }
    //console.log(cadastro);
    //console.log('\n'+JSON.stringify(cadastro+','))
    fs.appendFileSync('nome.json', `\n  ${JSON.stringify(cadastro)}`)
    resultado = `Olá ${cadastro.nome}`
    response.render('result', { resultado });
})
app.use((request, response, next) => {
    response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});