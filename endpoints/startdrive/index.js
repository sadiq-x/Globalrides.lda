import Driver from "../../driver/index.js"
export async function startdrive(req, res) {
    const driver = new Driver()
    driver.setStartDriver(req.body)
    let insertDriver = await driver.sendDriver()
    if (insertDriver){
        res.json(true)
    }else{
        res.json(false)
    } 
}