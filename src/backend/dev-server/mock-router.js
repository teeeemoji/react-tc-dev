var express = require('express');
var router = express.Router();

var path = require('path');
var mockPath = path.resolve(__dirname, '../mock');
let mockConfig = require(path.join(mockPath, '/mock'));

mockConfig.map(
    (item, index) => {
        router.use(item.test, function (req, res) {
            console.log('path: ' + req.baseUrl)
            console.log('query: ');
            console.dir(req.query);
            console.log('params: ');
            console.dir(req.params);
            console.log('body: ');
            console.dir(req.body);
            res.send(require(path.join(mockPath, item.mock))(req.query,req.params,req.body))
        })
    }
);

module.exports = router;