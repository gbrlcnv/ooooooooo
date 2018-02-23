(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusLogDeleteController',RequestStatusLogDeleteController);

    RequestStatusLogDeleteController.$inject = ['$uibModalInstance', 'entity', 'RequestStatusLog'];

    function RequestStatusLogDeleteController($uibModalInstance, entity, RequestStatusLog) {
        var vm = this;

        vm.requestStatusLog = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            RequestStatusLog.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
