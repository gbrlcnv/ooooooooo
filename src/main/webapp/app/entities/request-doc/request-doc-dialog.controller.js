(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestDocDialogController', RequestDocDialogController);

    RequestDocDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'RequestDoc'];

    function RequestDocDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, RequestDoc) {
        var vm = this;

        vm.requestDoc = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.requestDoc.id !== null) {
                RequestDoc.update(vm.requestDoc, onSaveSuccess, onSaveError);
            } else {
                RequestDoc.save(vm.requestDoc, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('oooooooooApp:requestDocUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.submissionDate = false;
        vm.datePickerOpenStatus.updateDate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
