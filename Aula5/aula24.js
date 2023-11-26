const port = 5950;
//const ip = Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family==='IPv4' && !i.internal && i.address || []), [])), [])[0]
const express = require('express');
const app = express();
const fs = require('fs');
app.set('view engine', "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render('index', {title:'Denúncia Segura'});
})
app.get("/obj", (req, res) => {
    res.render('obj', {title:'Denúncia Segura'});
})
app.get("/chat", (req, res) => {
    result=''
    res.render('chat');
})
app.get("/email", (req, res) => {
    resultado = ''
    res.render('email');
})
app.post('/salvar', (req, res) => {
    let emailNoForm = req.body.email
    let denNoForm = req.body.denuncia
    let apelNoForm = req.body.apelido
    let denuNoForm = req.body.denu
    let cadastro = { email: emailNoForm, denuncia: denNoForm, apelido: apelNoForm, denu: denuNoForm }
    //console.log(cadastro);
    //console.log('\n'+JSON.stringify(cadastro+','))
    fs.appendFileSync('Denuncias.json', `\n  ${JSON.stringify(cadastro)}`)
    resultado = `Sua denúncia foi salva`
    res.render('obg', { resultado });
    
})
app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
    });