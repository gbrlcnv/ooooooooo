(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusLogDialogController', RequestStatusLogDialogController);

    RequestStatusLogDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'RequestStatusLog'];

    function RequestStatusLogDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, RequestStatusLog) {
        var vm = this;

        vm.requestStatusLog = entity;
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
            if (vm.requestStatusLog.id !== null) {
                RequestStatusLog.update(vm.requestStatusLog, onSaveSuccess, onSaveError);
            } else {
                RequestStatusLog.save(vm.requestStatusLog, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('oooooooooApp:requestStatusLogUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.statusFromDate = false;
        vm.datePickerOpenStatus.statusChangeDate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
