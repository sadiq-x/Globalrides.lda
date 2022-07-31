import express from 'express';
const app = express();
const PORT = process.env.PORT_SRV || 9000;
let state;

import { database } from '../data/index.js';

import fs from 'fs';
import { allowedNodeEnvironmentFlags, nextTick } from 'process';
const templateHtml = fs.readFileSync('./src/index.html', 'utf-8');
app.use(express.static('./src'));
app.use(express.json());

async function main() {
    state = await database()
    if (state) {
        server()
    } else {
        setTimeout(() => { main() }, 5000, console.log('Trying connect to server...'))
    }

}

function server() {
    if (state) {
        app.listen(PORT, () => {
            console.log(`Server online at port ${PORT}`)
        })
    }
}


//Endpoints

app.use('/drivers', (req, res) => {
    let view = templateHtml
    res.send(view)
})

import { startdrive } from '../endpoints/startdrive/index.js';
app.post('/driver/startdrive', startdrive,(req, res) => {});

import { finishdrive } from '../endpoints/finishdrive/index.js';
app.post('/driver/finishdrive', finishdrive, (req,res) => {});
main()