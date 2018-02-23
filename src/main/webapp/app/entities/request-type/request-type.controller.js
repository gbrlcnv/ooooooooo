(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestTypeController', RequestTypeController);

    RequestTypeController.$inject = ['RequestType'];

    function RequestTypeController(RequestType) {

        var vm = this;

        vm.requestTypes = [];

        loadAll();

        function loadAll() {
            RequestType.query(function(result) {
                vm.requestTypes = result;
                vm.searchQuery = null;
            });
        }
    }
})();
