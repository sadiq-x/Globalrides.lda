import expres from 'express';
const app = expres();
const PORT = process.env.PORT_SRV || 9000;
let state;

import { database } from '../data/index.js';

import fs from 'fs';
const templateHTML = fs.readFileSync('./src/index.html', 'utf-8');
app.use(expres.static('./src/'));
app.use(expres.json())

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
app.get('/analytics', (req, res,) => {
    let view = templateHTML
    res.send(view)
})

app.post('/analytics/car', (req, res)=> {
    console.log(req.body, 'ok')
    res.send('ok')
})

main();
