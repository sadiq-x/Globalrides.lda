import { MongoClient } from "mongodb";
const URI = 'mongodb+srv://sadiq:Rafaelalves_43@cluster0.tpn4u.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(URI)
const dbname = 'Yepkit-build';

let clientconnect;

export async function database(){
    return await client.connect().then(()=>{
        clientconnect = client.db(dbname)
        return true
    })
}

export function getClient(){
    if(clientconnect){
        return clientconnect
    }
}