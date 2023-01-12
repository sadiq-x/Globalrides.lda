import Analytics from "../../analytics/index.js";

export async function getCar(req, res) {
    const analytics = new Analytics()
    if (req.body.car && req.body.datequery) {
        analytics.setCarData(req.body.car)
        const result = await analytics.getdatacarFiltred(req.body.datequery)
        res.json(result)
    }else if (req.body.car) {
        analytics.setCarData(req.body.car)
        const result = await analytics.getdatacar()
        res.json(result)
    } else {
        res.json(false)
    }
}