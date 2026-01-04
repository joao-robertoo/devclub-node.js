//MODELO ANTIGO
//const express = require('express');

//MODELO NOVO
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/usuarios', async (req, res) => {

  const user = await prisma.user.findMany()

  res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name
    }
  })

  res.status(201).json({ message: 'Usuário criado com sucesso!' })
})

app.put('/usuarios/:id', async (req, res) => {

  req.params.id
  const user = await prisma.user.update({
    where: {
      id: req.body.id
    },
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name
    }
  })

  res.status(202).json({ message: 'Usuário criado com sucesso!' })
})

app.listen(3001);
// req - Requisição
// res - Resposta