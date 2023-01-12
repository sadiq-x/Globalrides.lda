import { getClient } from "../data/index.js";

export default class Analytics {
    constructor() {
        this.doc = {
            driver: null,
            car: null,
        };
    }

    /**Function setDriverData, set a driver to search on colection */
    setDriverData(driver) {
        this.doc.driver = driver
    }

    /**Function setCarData, set a car to search on colection */
    setCarData(car) {
        this.doc.car = car
    }

    /**Function getdatadriver gives all data o driver*/
    async getdatadriver() {
        const driver = this.doc.driver
        const collection = await getClient().collection(driver)
        let result = await collection.find().toArray({})
        if (result) {
            return result
        } else {
            return false
        }
        
    }

    /**Function getdatadriverDatequery gives data of driver from greater date*/
    async getdatadriverDatequery1(date) {
        const driver = this.doc.driver
        const collection = await getClient().collection(driver)
        let result = await collection.find({"user.data" : {$gte : date}}).toArray({})
        if (result) {
            return result
        } else {
            return false
        }
    }

    /**Function getdatadriverDatequery gives two data of driver from greater date*/
    async getdatadriverDatequery2(date1,date2) {
        const driver = this.doc.driver
        const collection = await getClient().collection(driver)
        let result = await collection.find({"user.data" : {$gte : date1, $lte : date2}}).toArray({})
        if (result) {
            return result
        } else {
            return false
        }
    }

    /**Function getdatacar, get the data from car name colection*/
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

    /**Function getKmCar, get the actual km registry in database*/
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