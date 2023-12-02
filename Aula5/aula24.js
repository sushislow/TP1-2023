const port = 8000;
//const ip = Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family==='IPv4' && !i.internal && i.address || []), [])), [])[0]
const express = require('express');
const app = express();
const fs = require('fs');
app.set('view engine', "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

let vetornomes = [] 
if (fs.existsSync('Denuncias.json')){
   const dados = fs.readFileSync('Denuncias.json', 'utf-8')
   console.log(dados);
   vetornomes = JSON.parse(dados)
}

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/obj", (req, res) => {
    res.render('obj');
});
app.get("/chat", (req, res) => {
    res.render('chat');
});
app.get("/email", (req, res) => {
    resultado = ''
    res.render('email');
});
app.post('/salvar', (req, res) => {
    let emailNoForm = req.body.email
    let denNoForm = req.body.denuncia
    let apelNoForm = req.body.apelido
    let denuNoForm = req.body.denu
    let cadastro = { email: emailNoForm,
        denuncia: denNoForm, 
        apelido: apelNoForm, 
        denu: denuNoForm }

    console.log(cadastro)
    console.log('\n'+JSON.stringify(cadastro+','))
    vetornomes.push(cadastro)
    fs.writeFileSync('Denuncias.json', `\n  ${JSON.stringify(vetornomes)}`)
    resultado = `Sua denúncia foi salva`
    res.render('obg', { resultado });
})
app.get('/mostrar', (req, res) => {
    res.render('nomes', {vetornomes});
});
app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
    });