app.controller('OrdersController', function($scope, $routeParams, customersFactory) {

    var customerId = $routeParams.customerId;
    $scope.orders = null;
    $scope.customer = null;
    
    function init() {

        customersFactory.getCustomer(customerId)
            .success(function(customer) {
                $scope.customer = customer;
            })
            .error(function(data, status, headers, config) {
                // handle error
            });
    }

    init();
});    