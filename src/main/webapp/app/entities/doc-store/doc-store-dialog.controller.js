(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('DocStoreDialogController', DocStoreDialogController);

    DocStoreDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'DocStore'];

    function DocStoreDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, DocStore) {
        var vm = this;

        vm.docStore = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.docStore.id !== null) {
                DocStore.update(vm.docStore, onSaveSuccess, onSaveError);
            } else {
                DocStore.save(vm.docStore, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('oooooooooApp:docStoreUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setContentBinary = function ($file, docStore) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        docStore.contentBinary = base64Data;
                        docStore.contentBinaryContentType = $file.type;
                    });
                });
            }
        };
        vm.datePickerOpenStatus.creationDate = false;

        vm.setContentText = function ($file, docStore) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        docStore.contentText = base64Data;
                        docStore.contentTextContentType = $file.type;
                    });
                });
            }
        };

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
