const { Services } = require("../services")
const testServices = Services.Test
const testControllers = {}

testControllers.test = async(req, res) => {
    try {
        const data = testServices.getResponse()
        return res.status(200).json(data)
    } catch(error) {
        console.error(error)
    }
}

module.exports = testControllers