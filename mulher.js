const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: "Bruna",
        imagem: "https://media.licdn.com/dms/image/D4D03AQEa-RqnIvTsKg/profile-displayphoto-shrink_400_400/0/1695710059507?e=1712188800&v=beta&t=VM6PBsZ6RyV11-AqKIg92waCBo8wk3J2UxtpzwMmmts",
        minibio: "Bacharel em transição"
    })
}

 function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",  porta)
 }

 app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)