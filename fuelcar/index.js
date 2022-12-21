import { getClient } from "../data/index.js";

export default class FuelCar {
    constructor(){
        this.doc = {
            caropt:{
                car: null,
                litre: null,
                data: null
            }
        }
    }

    setfuelcar(data){
        this.doc.caropt = data
        this.doc.caropt.data = Date.now()
    }

    async sendData(){
        if(this.doc){
            let car = this.doc.caropt.car
            let collection = await getClient().collection(car)
            const result = await collection.insertOne(this.doc)
            if (result.insertedId){
                return true
            }else {
                return false
            }
        }else {
            return false
        }
    }
}