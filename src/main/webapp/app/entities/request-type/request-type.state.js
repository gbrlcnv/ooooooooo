(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('request-type', {
            parent: 'entity',
            url: '/request-type',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestTypes'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-type/request-types.html',
                    controller: 'RequestTypeController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('request-type-detail', {
            parent: 'request-type',
            url: '/request-type/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestType'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-type/request-type-detail.html',
                    controller: 'RequestTypeDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'RequestType', function($stateParams, RequestType) {
                    return RequestType.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'request-type',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('request-type-detail.edit', {
            parent: 'request-type-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-type/request-type-dialog.html',
                    controller: 'RequestTypeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestType', function(RequestType) {
                            return RequestType.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-type.new', {
            parent: 'request-type',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-type/request-type-dialog.html',
                    controller: 'RequestTypeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                reqType: null,
                                code: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('request-type', null, { reload: 'request-type' });
                }, function() {
                    $state.go('request-type');
                });
            }]
        })
        .state('request-type.edit', {
            parent: 'request-type',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-type/request-type-dialog.html',
                    controller: 'RequestTypeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestType', function(RequestType) {
                            return RequestType.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-type', null, { reload: 'request-type' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-type.delete', {
            parent: 'request-type',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-type/request-type-delete-dialog.html',
                    controller: 'RequestTypeDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['RequestType', function(RequestType) {
                            return RequestType.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-type', null, { reload: 'request-type' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
