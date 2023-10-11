const port = 4000;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.get("/index", (request, response) => {
response.render("teste4"); //views/teste4.ejs
});
app.get("/calcular", (request, response) => {

    let teste = request.query.NN
    let teste2 = request.query.N2
    let operação = request.query.OP
    var resultado
    if(operação=="+"){
     resultado = parseFloat(teste) + parseFloat(teste2)
    }
    else if(operação=="-"){
        resultado = parseFloat(teste) - parseFloat(teste2)
       }
       else if(operação=="*"){
        resultado = parseFloat(teste) * parseFloat(teste2)
       }
       else if(operação=="/"){
        resultado = parseFloat(teste) / parseFloat(teste2)
       }
    response.render('result',{resultado})
})
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});