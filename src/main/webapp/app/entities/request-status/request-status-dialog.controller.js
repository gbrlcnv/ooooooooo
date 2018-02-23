(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusDialogController', RequestStatusDialogController);

    RequestStatusDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'RequestStatus'];

    function RequestStatusDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, RequestStatus) {
        var vm = this;

        vm.requestStatus = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.requestStatus.id !== null) {
                RequestStatus.update(vm.requestStatus, onSaveSuccess, onSaveError);
            } else {
                RequestStatus.save(vm.requestStatus, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('oooooooooApp:requestStatusUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
