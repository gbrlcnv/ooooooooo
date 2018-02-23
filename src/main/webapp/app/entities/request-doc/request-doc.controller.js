(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestDocController', RequestDocController);

    RequestDocController.$inject = ['RequestDoc'];

    function RequestDocController(RequestDoc) {

        var vm = this;

        vm.requestDocs = [];

        loadAll();

        function loadAll() {
            RequestDoc.query(function(result) {
                vm.requestDocs = result;
                vm.searchQuery = null;
            });
        }
    }
})();
