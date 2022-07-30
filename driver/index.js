import { getClient } from "../data";
let collection;

export default class driver {
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
    setDriver(driver) {
        this.doc = driver
        this.doc.data = new Date(Date.now()).toUTCString()
    }

    //Send a driver data to database and chose the right collection.
    /**The driver data necessary and need to be set first, send the driver data to database.*/
    async sendDriver() {
        if (this.doc) {
            let user = this.doc.name
            let collection = getClient().collection(user)
            const result = await collection.insertOne(this.doc)
            return (true)
        }else{
            return false
        }
    }

}