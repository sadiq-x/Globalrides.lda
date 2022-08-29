import { getClient } from "../data/index.js";

export default class Driver {
    /**The constructor are universal that for start or finish drives*/
    constructor() {
        this.doc = {
            user: {
                name: null,
                numero: null,
                mood: null,
                car: null,
                km: null,
                data: null,
                obs: null
            }             
        }
    }

    //Set driver.
    /**Required the driver.*/
    setStartDriver(driver) {
        this.doc.user = driver
        this.doc.user.data = new Date(Date.now()).toUTCString()
    }

    setFinishDriver(driver) {
        this.doc.user = driver
        this.doc.user.data = new Date(Date.now()).toUTCString()
        this.doc.user.money =  driver.money
    }

    setPauseDriver(driver) {
        this.doc.user = driver
        this.doc.user.data = new Date(Date.now()).toUTCString()
    }

    //Send a driver data to database and chose the right collection.
    /**The driver data necessary and need to be set first, send the driver data to database.*/
    async sendDriver() {
        if (this.doc) {
            let user = this.doc.user.name
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