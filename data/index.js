import { MongoClient } from "mongodb";
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
