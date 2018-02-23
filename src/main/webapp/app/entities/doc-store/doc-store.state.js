(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('doc-store', {
            parent: 'entity',
            url: '/doc-store',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'DocStores'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/doc-store/doc-stores.html',
                    controller: 'DocStoreController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('doc-store-detail', {
            parent: 'doc-store',
            url: '/doc-store/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'DocStore'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/doc-store/doc-store-detail.html',
                    controller: 'DocStoreDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'DocStore', function($stateParams, DocStore) {
                    return DocStore.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'doc-store',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('doc-store-detail.edit', {
            parent: 'doc-store-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/doc-store/doc-store-dialog.html',
                    controller: 'DocStoreDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['DocStore', function(DocStore) {
                            return DocStore.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('doc-store.new', {
            parent: 'doc-store',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/doc-store/doc-store-dialog.html',
                    controller: 'DocStoreDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                locale: null,
                                code: null,
                                title: null,
                                description: null,
                                contentBinary: null,
                                contentBinaryContentType: null,
                                creationDate: null,
                                contentText: null,
                                contentTextContentType: null,
                                mimeType: null,
                                path: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('doc-store', null, { reload: 'doc-store' });
                }, function() {
                    $state.go('doc-store');
                });
            }]
        })
        .state('doc-store.edit', {
            parent: 'doc-store',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/doc-store/doc-store-dialog.html',
                    controller: 'DocStoreDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['DocStore', function(DocStore) {
                            return DocStore.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('doc-store', null, { reload: 'doc-store' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('doc-store.delete', {
            parent: 'doc-store',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/doc-store/doc-store-delete-dialog.html',
                    controller: 'DocStoreDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['DocStore', function(DocStore) {
                            return DocStore.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('doc-store', null, { reload: 'doc-store' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
