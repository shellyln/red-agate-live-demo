
function setHeader(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
}

module.exports = {
    "port": 8080,
    "server": {
        "baseDir": "dist",
        "routes": {
            "/src": "src",
            "/node_modules": "node_modules",
        },
        "middleware": {
            1: setHeader
        }
    },
    startPath: "/demo.html"
}