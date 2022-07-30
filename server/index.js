import express from 'express';
const app = express();
const PORT = process.env.PORT_SRV || 9000;
let state;

import {database} from '../data/index.js';

async function main(){
    state = await database()
    if (state){
        server()
    }else{
        setTimeout(()=>{main()},5000,console.log('Trying connect to server...'))
    }

}

function server(){
    if (state){
        app.listen(PORT, ()=>{
            console.log(`Server online at port ${PORT}`)
        })
    }
}

main()