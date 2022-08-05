import { getClient } from "../data/index.js";

export default class Analytics {
    constructor() {
        this.doc = {
            driver: null,
            car: null
        };
    }

    setDriverData(driver) {
        this.doc.driver = driver
    }

    setCarData(car) {
        this.doc.car = car
    }

    async getdatadriver() {
        const driver = this.doc.driver
        const collection = await getClient().collection(driver)
        let result = await collection.find({}).toArray()
        if (result) {
            return result
        } else {
            return false
        }
    }

    async getdatacar() {
        const car = this.doc.car
        const collection = await getClient().collection(car)
        let result = await collection.find({}).toArray()
        if (result) {
            return result
        } else {
            return false
        }
    }

    async getKmCar() {
        const car = this.doc.car
        const collection = await getClient().collection(car)
        const result = await collection.findOne({}, {sort: {_id: -1}, limit: 1 });
        if (result) {
            return result
        } else {
            return false
        }
    }
}