const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Bruna Consentino',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQEa-RqnIvTsKg/profile-displayphoto-shrink_400_400/0/1695710059507?e=1712188800&v=beta&t=VM6PBsZ6RyV11-AqKIg92waCBo8wk3J2UxtpzwMmmts',
        minibio: 'Bacharel e futura backend developer'
        
    },
    {
    
            nome: 'Iana Chan',
         
            imagem: 'https://bit.ly/3JCXBqP',
         
            minibio: 'CEO & Founder da PrograMaria',
         
          },
         
          {
         
            nome: 'Luana Pimentel',
         
            imagem: 'https://bit.ly/3FKpFaz',
         
            minibio: 'Senior Staff Software Engineer',
         
          }

]

function mostraMulheres(request, response) {
response.json(mulheres)
}

 function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",  porta)
 }

 app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)