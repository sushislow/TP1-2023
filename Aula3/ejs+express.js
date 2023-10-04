const port = 4000;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/index", (request, response) => {
response.render("teste3"); //views/teste3.ejs
});
app.get("/ola", (request, response) => {
    let teste = `${request.query.nome} ${request.query.sobrenome} de ${request.query.cidade}`
    response.render('final',{teste})
})
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});