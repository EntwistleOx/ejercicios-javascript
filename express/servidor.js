var express = require('express'); // trae express con requiere, lo guarda en variable express
var app = express(); // ejecuta express y lo guarda en app

app.get('/', inicio);

app.get('/cursos', cursos);

function inicio(request, response) {
    // request: peticion del navegador al servidor
    // response: resultado, lo que el servidor envia al navegador
    response.send("Funciona <b>ExpressJS!!</b>");
}

function cursos(request, response) {
    response.send("Estos son los cursos!!</b>");
}

// correr servidor
app.listen(8989); 