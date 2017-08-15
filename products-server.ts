declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
import { productData } from "./produc-data";

var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());

const products  =  productData;

app.route('/products')
    .get((req, res) => {
        var filtered = products;
        res.status(200).json(filtered);
    })
    .post((req, res) => {
        products.push(req.body);
        res.status(200).send();
    });

app.route('/products/:productId')
    .delete((req,res) => {
        const productId = req.params.productId;
        console.log("deleting lesson ", productId);
        const index = _.find(products,
            product => product.id === productId
        );
        products.splice(index, 1);
        res.status(200).send();
    });

function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: './src/router-introduction' });
}

app.use(redirectRouterLessonUnmatched);


var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});