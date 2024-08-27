const localData = require("../data")
const data = require("../class/data/index")


const testClassData = () => {
    const places = ["id", "value"]
    const testData = data(places)
    
    return console.log(testData)
}

const testDatas = () => {
    console.log(localData.user.auth)
    console.log(localData.user.info)
    console.log(localData.user.categories)
    console.log(localData.event.info)
    console.log(localData.event.categories)
}

module.exports = {
    testClassData,
    testDatas
}