import Analytics from "../../analytics/index.js";

export async function getDriver(req, res) {
    const analytics = new Analytics()
    if (req.body.driver) {
        analytics.setDriverData(req.body.driver)
        const result = await analytics.getdatadriver()
        res.json(result)
    } else {
        res.json(false)
    }
}