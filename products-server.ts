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
    .post((req,res) =>{
        products.push(req.body);
        res.status(200).send();
    });
app.route('/products/:productId') 
    .delete((req, res) => {
        let productId = req.params.productId;
        console.log("deleting",productId);
        const index  =  _.find(products, product => product.id === productId);
        products.splice(index,1);
        res.status(200).send;
    })
    .put((req, res) => {
        let productId = req.params.productId;
        console.log("putting",productId);
        let producto  =  _.filter(products, product => product.id === productId);
        producto.id  = req.params.productId;
        producto.stock = req.body.stock;
        console.log(producto.stock);
        res.status(200).send();
    });
var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});