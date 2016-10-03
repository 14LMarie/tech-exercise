(function(){
// controller calling the dataservice factory
angular
    .module('app')
    .controller('ProductsController', ProductsController);

ProductsController.$inject = ['dataservice', '$log', '$window', '$location'];

function ProductsController(dataservice, $log, $window, $location) {
    var vm = this;
    vm.products = [];
    
    activate();

    function activate() {
        return getProducts().then(function() {
           //$log.info('Activated Products View');
            console.log(vm.products);
        });
    }

    function getProducts() {
        return dataservice.getProducts()
            .then(function(data) {
                vm.products = data;
                return vm.products;
            });
    }
    
} 
    
})();