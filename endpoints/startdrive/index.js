
import Driver from "/Users/Rafael/Desktop/globalride-driverapi/driver/index.js";

export async function startdrive(req, res) {
    const driver = new Driver()
    driver.setStartDriver(req.body)
    let insertDriver = await driver.sendDriver()
}