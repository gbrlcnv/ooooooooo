(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusController', RequestStatusController);

    RequestStatusController.$inject = ['RequestStatus'];

    function RequestStatusController(RequestStatus) {

        var vm = this;

        vm.requestStatuses = [];

        loadAll();

        function loadAll() {
            RequestStatus.query(function(result) {
                vm.requestStatuses = result;
                vm.searchQuery = null;
            });
        }
    }
})();
