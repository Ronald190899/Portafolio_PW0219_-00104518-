const Mongoose = require("mongoose");
let database="ResgisterBD"
let host="localhost"
let port='27017'
let uri=`mongodb://${host}:${port}/${database}`

const connect=()=>{
    Mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{

    console.log(`conexion exitosa`);
})

.catch(()=>{

    console.log(`Un error ha ocurrido al conectar con la BD`);
});

};


module.exports={
    connect
}