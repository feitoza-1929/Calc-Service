const url = require("url")

function getUrlData(req){
        let uri = url.parse(req.url, true).path
        let uriData = uri.replace(/(\/?\D)+/, '').split('/').map(d => +d)

        return uriData
}

module.exports = {getUrlData}