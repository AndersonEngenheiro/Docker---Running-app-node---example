import express from 'express'

const app = express()
let port = process.env.port || 3000;

app.listen(process.env.port || 3000, (req, res) =>{
    console.log(`servidor rodando na porta ${port}`)
})

app.get('/', (req, res)=>{
    res.send(process.env) // lista várias infos
})
