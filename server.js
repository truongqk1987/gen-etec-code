const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var isEmpty = require('lodash.isempty');
var nodePlop = require('node-plop');

var plop = nodePlop(`./plopfile.js`);

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json({ type: 'application/json' }))

app.post('/search-page', function (req, res) {
    console.log(req.body);
    if (!isEmpty(req.body)) {
        var buidSearchPageInfo = req.body;
        var searchPageGenerator = plop.getGenerator('search-page');

        // run all the generator actions using the data specified
        searchPageGenerator.runActions(buidSearchPageInfo).then((results)  => {
        // do something after the actions have run
            res.send(`${buidSearchPageInfo.pageName}.html`);
        });
    }

});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 9000, function() {
    console.log("Listing on port 9000...")
});