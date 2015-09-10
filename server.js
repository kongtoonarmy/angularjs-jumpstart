var express = require('express');
app = express();

app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function (req, res) {

    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
})

app.get('/customers', function (req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {

    var orders = [];
    for (var i=0, len=customers.length; i<len; i++) {
        if (customers[i].orders) {
            for (var j=0, ordersLen=customers[i].orders.length; j<ordersLen; j++) {
                orders.push(customers[i].orders[j]);
            }
        }
    }
        
    res.json(orders);    
});

app.delete('/customers/:id', function(req, res) {

    var customersId = parseInt(req.params.id);
    var data = { status: true };
    
    for (var i=0, len=customers.length; i<len; i++) {
        
        if (customers[i].id == customerId) {
            customers.splice(i, 1);
            data = { status: true };
            break;
        }
    }
    
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
    {
        id: 1,
        joined: '2000-12-02',
        name: 'John',
        city: 'Chandler',
        orderTotal: 9.9956,
        orders: [
            {
                id: 1,
                product: 'Shoes',
                total: 9.9956
            }
        ]
    },
    {
        id: 2,
        joined: '2012-12-03',
        name: 'Zed',
        city: 'Las Vegas',
        orderTotal: 19.99,
        orders: [
            {
                id: 2,
                product: 'Shirt',
                total: 145.558
            }
        ]
    },
    {
        id: 3,
        joined: '2013-12-03',
        name: 'Alan',
        city: 'Selleck',
        orderTotal: 8.99,
        orders: [
            {
                id: 3,
                product: 'Book',
                total: 145.558
            }
        ]
    },
    {
        id: 4,
        joined: '2014-12-03',
        name: 'Ben',
        city: 'Auburn',
        orderTotal: 14.03,
        orders: [
            {
                id: 4,
                product: 'Hotel',
                total: 145.558
            },
            {
                id: 5,
                product: 'Rubber',
                total: 0.50
            }
        ]
    }
];