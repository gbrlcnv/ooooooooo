(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusDeleteController',RequestStatusDeleteController);

    RequestStatusDeleteController.$inject = ['$uibModalInstance', 'entity', 'RequestStatus'];

    function RequestStatusDeleteController($uibModalInstance, entity, RequestStatus) {
        var vm = this;

        vm.requestStatus = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            RequestStatus.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
