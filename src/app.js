const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000 // o 0 (cero) para puerto aleatorio

//const PUBLIC_PATH = process.env.PUBLIC_PATH || path.resolve(__dirname, './public')


//app.use(express.static(PUBLIC_PATH))
app.use(express.static(path.join(__dirname,'./public')))

app.get('/', function(req, res){
    res.send('Hola mundo desde port 3000')
})
app.use('/home', function(req, res){
    res.sendFile(path.join(__dirname,'/public/home.html'))
})
// app.get('/home', function(req, res){
//     res.sendFile(path.join(PUBLIC_PATH,'home.html'))
// })
app.use('/servicios', function(req, res){
    res.sendFile(path.join(__dirname,'/public/servicios.html'))
})

// app.get('/servicios', function(req, res){
//     res.sendFile(path.join(PUBLIC_PATH,'servicios.html'))
// })
app.use('/contacto', function(req, res){
    res.sendFile(path.join(__dirname,'/public/contact.html'))
})

// app.get('/contacto', function(req, res){
//     res.sendFile(path.join(PUBLIC_PATH,'contact.html'))
// })
console.log(__dirname);

app.get('/contactoss', function(req, res){
    res.send('<h1>Bienvenido a CONTACTOS</h1>')
})

// app.listen(0, ()=>{
//     const port= server.address().port;
//     console.log(`El servidor este escuchando en puerto http://localhost:${port}`);
//     //onsole.log(`Open: http://localhost:${server.address().port}`);
// })

const server = app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${server.address().port}`);
    
})

//Incio archivo: 28-04-2024