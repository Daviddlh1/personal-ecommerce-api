const productsControllers = {}

productsControllers.getProjects = (req, res) => {
    console.log("Hello from getProjects route")
    res.status(200).json("entré")
}


module.exports = productsControllers