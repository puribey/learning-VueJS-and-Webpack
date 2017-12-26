const express = require('express')
const app = express()

//poner el static antes de los views para que agarre el html pero cuando es plano 
app.use(express.static('views'))
// esto es lo que se ejecuta cuando express puede levantar un servidor en el puerto 3000
app.get('/', (req, res) => res.send('Hello World!'))
//deja a la escucha es servidor 
app.listen(3000, () => console.log('Example app listening on port 3000!'))