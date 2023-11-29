const port = 4000;

//Express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
const fs = require("fs");
app.set('view engine', 'ejs');
 
let vetornomes = []
if (fs.existsSync('nome.json')){
    const dados = fs.readFileSync('nome.json', 'utf-8')
    console.log(dados);
    vetornomes = JSON.parse(dados)
}

app.get("/", (request, response) => {
    response.render("result"); //views/teste4.ejs
    resultado = ''
});
app.post("/teste4", (req, res) => {
    let nomeNoForm = req.body.nome
    let cadastro = { nome: nomeNoForm }
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro+','))
    vetornomes.push(cadastro)
    fs.writeFileSync('nome.json', `\n  ${JSON.stringify(vetornomes)}`)
    resultado = `Olá ${cadastro.nome}`
    res.render('result', { resultado });
})
app.get('/nomes'), (req,res) => {
    res.render('nomes', {vetornomes})
}
app.use((req, res, next) => {
    res.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});