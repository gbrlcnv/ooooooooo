(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestController', RequestController);

    RequestController.$inject = ['Request'];

    function RequestController(Request) {

        var vm = this;

        vm.requests = [];

        loadAll();

        function loadAll() {
            Request.query(function(result) {
                vm.requests = result;
                vm.searchQuery = null;
            });
        }
    }
})();
