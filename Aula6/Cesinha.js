const port = 4000;

//Express
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
const fs = require("fs");
app.set('view engine', 'ejs');
 
let vetornomes = []
if (fs.existsSync('nomes.json')){
    const dados = fs.readFileSync('nomes.json', 'utf-8')
    console.log(dados);
    vetornomes = JSON.parse(dados)
}

app.get("/", (req, res) => {
    resultado = ''
    res.render("result"); //views/teste4.ejs
    
});
app.post("/teste4", (req, res) => {
    let nomeNoForm = req.body.nome
    let cadastro = { nome: nomeNoForm }
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro+','))
    vetornomes.push(cadastro)
    fs.writeFileSync('nomes.json', `\n  ${JSON.stringify(vetornomes)}`)
    resultado = `Olá ${cadastro.nome}`
    res.render('result', { resultado });
})
app.get('/mostrar', (req,res) => {
    res.render('nomes', {vetornomes});
});
app.use((req, res, next) => {
    res.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
});