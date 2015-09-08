app.controller('OrdersController', function($scope, $routeParams, customersFactory) {

    var customerId = $routeParams.customerId;
    $scope.orders = null;
    $scope.customer = null;
    
    function init() {

        $scope.customer = customersFactory.getCustomer(customerId);
    }

    init();
});    