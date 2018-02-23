(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusLogController', RequestStatusLogController);

    RequestStatusLogController.$inject = ['RequestStatusLog'];

    function RequestStatusLogController(RequestStatusLog) {

        var vm = this;

        vm.requestStatusLogs = [];

        loadAll();

        function loadAll() {
            RequestStatusLog.query(function(result) {
                vm.requestStatusLogs = result;
                vm.searchQuery = null;
            });
        }
    }
})();
