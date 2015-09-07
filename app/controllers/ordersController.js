app.controller('OrdersController', function($scope, $routeParams) {
    
    var customerId = $routeParams.customerId;
    $scope.orders = null;
    
    function init() {
    
        // Search the customers for the customerId
        for (var i = 0, len = $scope.customers.length; i < len; i++) {
            if ($scope.customers[i].id == parseInt(customerId)) {
                $scope.orders = $scope.customers[i].orders;
                break;
            } 
        }
    }
    
    
    $scope.customers = [
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
            joined: '2000-12-03',
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
            joined: '2000-12-03',
            name: 'Zed',
            city: 'Las Vegas',
            orderTotal: 19.99,
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
            joined: '2000-12-03',
            name: 'Zed',
            city: 'Las Vegas',
            orderTotal: 19.99,
            orders: [
                {
                    id: 4,
                    product: 'Hotel',
                    total: 145.558
                }
            ]
        }
    ];
    
    init();
});    