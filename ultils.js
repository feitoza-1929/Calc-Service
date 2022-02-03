function getUrlData(url) {
        try {
            let data = url.replace(/(\/?\D)+/, '').split('/').map(d => +d)
            return data
        }
        catch (error){
            console.log(error)
        }
}

module.exports = {getUrlData}