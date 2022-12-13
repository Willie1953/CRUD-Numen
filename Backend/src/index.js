require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express= require('express');
const getDogsRouter= require('./Routes/getDogsRouter');
const postDogsRouter = require('./Routes/postDogsRouter');
const updateDogRouter = require('./Routes/updateDogRouter');
const deleteDogRouter = require('./Routes/deleteDogRouter');
// const cors=require('cors')

const server = express();

//Middlewares
server.use(express.json())

//database conection
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true

})
    .then(db =>console.log('Database is connected'))
    .catch(err=> console.log(err));

//Prueba de servidor
server.get('/',(_,res)=>{
    res.send('Conexión exitosa')
})
//CORS
server.use(cors({ origin: 'http://localhost:3000' }));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  next();
});

//Rutas
server.use('/dogs', getDogsRouter);
server.use('/postear', postDogsRouter);
server.use('/update', updateDogRouter);
server.use('/borrar', deleteDogRouter);



//Servidor corriendo
server.listen(5050, ()=>{
    console.log('Servidor en localhost:5050 corriendo correctamente')
})