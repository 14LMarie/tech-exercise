(function(){
   //dataservice factory
    angular
        .module('app')
        .factory('dataservice', dataservice);

        dataservice.$inject = ['$http', '$log'];

function dataservice($http, $log) {
    return {
        getProducts: getProducts
    };
            
        function getProducts(){
            return $http.get('data.json')
            .then(getProductsComplete)
            .catch(getProductsFailed);
        
        }
        
        function getProductsComplete(response) {
            return response.data.productList;
        }

        function getProductsFailed(error) {
            $log.error('XHR Failed for getProducts.' + error.data);
        }
    }
})();