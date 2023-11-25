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
app.get("/email", (req, res) => {
    res.render('email', {title:'Denúncia Segura'});
})
app.get("/email", (req, res) => {
    res.render("email"); 
    res.render('email', {title:'Denúncia Segura'});
    resultado = ''
    res.render('email', { resultado });
    
})
app.post('/salvar', (req, res) => {
    let emailNoForm = req.body.email
    let cadastro = { email: emailNoForm }
    //console.log(cadastro);
    //console.log('\n'+JSON.stringify(cadastro+','))
    fs.appendFileSync('Denuncias.json', `\n  ${JSON.stringify(cadastro)}`)
    resultado = `Olá ${emailNoForm}`
    res.render('email', {title:'Denúncia Segura'});
    res.render('email', { resultado });
    
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
    });