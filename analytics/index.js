import { getClient } from "../data/index.js";

export default class Analytics{
    constructor(){
        this.doc = {

        };
    }

    setdata(data){
        this.doc = data
    }

    async getdatadriver(data){
        let driver = data
        let collection = getClient().collection(driver)

    }
}