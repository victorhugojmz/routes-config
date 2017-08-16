declare const require;
var bodyParser = require('body-parser');
var _ = require('lodash');
var cors = require('cors');
var express = require('express');
import { productData } from "./produc-data";
var app = express();
app.use(cors());
app.options('*', cors());
app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());
const products  =  productData;
app.route('/products')
    .get((req, res) => {
        var filtered = products;
        res.status(200).json(filtered);
    })
    .delete((req, res) => {
        let product = req.body;
        const index  = products.indexOf(product);
        products.splice(index,1);
        res.status(200).send;
    })
    .post((req,res) =>{
        products.push(req.body);
        res.status(200).send();
    });
app.route('/products/:id')
    .put((req, res) => {
        var product = req.body
        product  =  _.extend(product, req.body);
        res.status(200).send();
    });
var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});