(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('DocStoreController', DocStoreController);

    DocStoreController.$inject = ['DataUtils', 'DocStore'];

    function DocStoreController(DataUtils, DocStore) {

        var vm = this;

        vm.docStores = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;

        loadAll();

        function loadAll() {
            DocStore.query(function(result) {
                vm.docStores = result;
                vm.searchQuery = null;
            });
        }
    }
})();
