const port = 5950;
const ip = Object.values(require('os').networkInterfaces()).reduce((r, list) => r.concat(list.reduce((rr, i) => rr.concat(i.family==='IPv4' && !i.internal && i.address || []), [])), [])[0]
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index', {title:'Denúncia Segura'});
})
app.get("/obj", (req, res) => {
    res.render('obj',{title:'Objetivos'});
})
app.get("/tec", (req, res) => {
    res.render('tec',{title:'Procure aqui'});
})

app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`);
    });