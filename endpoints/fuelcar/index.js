import FuelCar from "../../fuelcar/index.js";

export async function fuelcar(req, res) {
    const fuelCar = new FuelCar() 
    if (req.body){
        fuelCar.setfuelcar(req.body)
        let insertData = await fuelCar.sendData()
        if (insertData){
            res.json(true)
        }else{
            res.json(false)
        }
    }

}