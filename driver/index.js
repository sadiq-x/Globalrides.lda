import { getClient } from "../data/index.js";

export default class Driver {
    /**The constructor are universal that for start or finish drives*/
    constructor() {
        this.doc = {
            name: null,
            mood: null,
            car: null,
            km: null,
            data: null             
        }
    }

    //Set driver.
    /**Required the driver.*/
    setStartDriver(driver) {
        this.doc = driver
        this.doc.data = new Date(Date.now()).toUTCString()
    }

    setFinishDriver(driver) {
        this.doc = driver
        this.doc.money =  driver.money
        this.doc.data = new Date(Date.now()).toUTCString()
    }

    //Send a driver data to database and chose the right collection.
    /**The driver data necessary and need to be set first, send the driver data to database.*/
    async sendDriver() {
        if (this.doc) {
            let user = this.doc.name
            let collection = getClient().collection(user)
            const result = await collection.insertOne(this.doc)
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