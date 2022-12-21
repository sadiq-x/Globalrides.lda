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
            },
        }
    }

    //Set driver.
    /**Required the driver.*/
    setStartDriver(driver) {
        this.doc.user = driver
        this.doc.user.data = Date.now()
    }

    setFinishDriver(driver) {
        this.doc.user = driver
        this.doc.user.data = Date.now()
        this.doc.user.money = driver.money
    }

    setPauseDriver(driver) {
        this.doc.user = driver
        this.doc.user.data = new Date.now()
    }

    //Send a driver data to database and chose the right collection.
    /**The driver data necessary and need to be set first, send the driver data to database.*/
    async sendDriver() {
        if (this.doc) {
            let user = this.doc.user.name
            let car = this.doc.user.car
            let carCollection = getClient().collection(car)
            let collection = getClient().collection(user)
            const dataId = Date.now()
            const caropt = {
                km: this.doc.user.km,
                name:this.doc.user.name
            }
            try {
                const resultuser = await collection.insertOne(this.doc)
                const resultcar = await carCollection.insertOne({_id:dataId,caropt})
                if (resultuser.insertedId && resultcar.insertedId) {
                    return true
                } else {
                    return false
                }
            } catch (error) {
            }
        } else {
            return false
        }
    }
}