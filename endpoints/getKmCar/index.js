import Analytics from "../../analytics/index.js";

export async function getKmCar(req, res){
    const analytics = new Analytics()
    if (req.body.car){
        analytics.setCarData(req.body.car)
        const result = await analytics.getKmCar()
        res.json(result)
    }else{
        res.json(false)
    }
}