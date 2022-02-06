const url = require("url")

async function getUrlData(req) {
    try {
        let uri = url.parse(req.url, true).path
        let uriData = uri.replace(/(\/?\D)+/, '').split('/').map(d => +d)

        return Promise.resolve(uriData)
    }
    catch (error){
        return Promise.reject(error)
    }
}

module.exports = {getUrlData}