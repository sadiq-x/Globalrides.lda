import { getClient } from "/users/rafael/desktop/globalride-driverapi/data/index.js";

export default class FuelCar {
    constructor(){
        this.doc = {
            namecar:{
                car: null,
                litre: null,
                data: null
            }
        }
    }

    setfuelcar(data){
        this.doc.namecar = data
        this.doc.namecar.data = Date.now()

    }

    async sendData(){
        if(this.doc){
            let car = this.doc.namecar.car
            let collection = await getClient().collection(car)
            const result = await collection.inserOne(this.doc)
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