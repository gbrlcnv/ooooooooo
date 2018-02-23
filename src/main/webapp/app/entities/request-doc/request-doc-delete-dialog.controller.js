(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestDocDeleteController',RequestDocDeleteController);

    RequestDocDeleteController.$inject = ['$uibModalInstance', 'entity', 'RequestDoc'];

    function RequestDocDeleteController($uibModalInstance, entity, RequestDoc) {
        var vm = this;

        vm.requestDoc = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            RequestDoc.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
