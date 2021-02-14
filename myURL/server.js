const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    console.log("req.url: " + req.url)

    const file = req.url == '/' ? 'index.html' : req.url
    console.log("file: " + file)

    const filePath = path.join(__dirname, 'public', file)
    console.log("filePath: " + filePath)
    console.log("\n")

    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if(!allowed) return

    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err

            res.end(content)
        }
    )

}).listen(5000, () => console.log('Server running'))