
app.service('customersService', function() {

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

    this.getCustomers = function() {
        return customers;
    };

    this.getCustomer = function(customerId) {
        for (var i = 0, len = customers.length; i < len; i++) {
            if (customers[i].id == parseInt(customerId)) {
                return customers[i];
            }
        }
        return {};
    }

});



