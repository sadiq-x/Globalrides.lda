import express from 'express';
const app = express();
const PORT = process.env.PORT_SRV || 9000;
let state;


async function main(){
    
}

function server(){
    if (state){
        app.listen(PORT, ()=>{
            console.log(`Server online at port: ${PORT}`)
        })
    }
}