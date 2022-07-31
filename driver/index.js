import { getClient } from "../data/index.js";
let collection;

export default class Driver {
    /**The constructor are univelsar that for start or finish drives*/
    constructor() {
        this.doc = {
            name: null,
            mood: null,
            car: null,
            km: null,
            data: null,
            fuel: false //The value are always false, only when the driver change the value was be true                
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
            console.log(collection)
            return (true)
        }else{
            return false
        }
    }

}