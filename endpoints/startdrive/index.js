import Driver from "/home/rafa/Área de Trabalho/gr-gitrepo/driver/index.js"
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