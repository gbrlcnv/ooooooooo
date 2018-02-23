(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('DocStoreDeleteController',DocStoreDeleteController);

    DocStoreDeleteController.$inject = ['$uibModalInstance', 'entity', 'DocStore'];

    function DocStoreDeleteController($uibModalInstance, entity, DocStore) {
        var vm = this;

        vm.docStore = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            DocStore.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
