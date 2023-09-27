const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/index", (request, response) => {
response.render("index"); //views/index.ejs
});
app.get("/ola", (request, response) => {
    response.send (`Olá, ${request.query.nome} ${request.query.sobrenome}`)
})
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});