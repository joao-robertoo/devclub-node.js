//MODELO ANTIGO
//const express = require('express');

//MODELO NOVO
import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
  res.send('Olá, rota acessada com sucesso!')
})

app.post('/usuarios', (req, res) => {
  res.send('Usuário criado com sucesso!')
})

app.listen(3001);
// req - Requisição
// res - Resposta