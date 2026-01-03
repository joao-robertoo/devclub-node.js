//MODELO ANTIGO
//const express = require('express');

//MODELO NOVO
import express from 'express'

const app = express()
app.use(express.json())

app.get('/usuarios/:goiaba', (req, res) => {
    console.log(req)

  res.send('Olá, rota acessada com sucesso!')
})

app.post('/usuarios', (req, res) => {
    console.log(req)

  res.send('Usuário criado com sucesso!')
})

app.listen(3001);
// req - Requisição
// res - Resposta