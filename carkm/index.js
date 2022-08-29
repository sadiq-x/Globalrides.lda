import { getClient } from '../data/index.js'

export class CarKm {
    constructor(){
        this.doc = {
            car: null,
            km:null
        }
    }

    setCarkm(car,km){
        this.doc.car = car
        this.doc.km = km
    }

    async sendCarkm(){
        if (this.doc){
            let car = this.doc.car
            const collection = getClient().collection('car')
            let result = await collection.insertOne(this.doc.km)
            if (result.insertedId){
                return true
            }else {
                return false
            }
        }else{
            return false
        }
    }
}