import Analytics from "../../analytics/index.js";

export async function getDriver(req, res) {
    const analytics = new Analytics()
    if (req.body.driver && req.body.datequery1 && req.body.datequery2) {
        analytics.setDriverData(req.body.driver)
        const datequery1 = req.body.datequery1
        const datequery2 = req.body.datequery2
        const result = await analytics.getdatadriverDatequery2(datequery1,datequery2)
        res.json(result)
    }else if (req.body.driver && req.body.datequery1 || req.body.datequery2) {
        analytics.setDriverData(req.body.driver)
        const datequery = req.body.datequery1 || req.body.datequery2
        const result = await analytics.getdatadriverDatequery1(datequery)
        res.json(result)
    } else if (req.body.driver){
        analytics.setDriverData(req.body.driver)
        const result = await analytics.getdatadriver()
        res.json(result)
    } else {
        res.json(false)
    }
}