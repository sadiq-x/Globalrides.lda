import Driver from "../../driver/index.js";

export async function finishdrive(req, res){
    const driver = new Driver()
    driver.setFinishDriver(req.body)
    let insertDriver = await driver.sendDriver()
    res.json(insertDriver)
}