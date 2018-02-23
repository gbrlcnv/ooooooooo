(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('request-status', {
            parent: 'entity',
            url: '/request-status',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestStatuses'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-status/request-statuses.html',
                    controller: 'RequestStatusController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('request-status-detail', {
            parent: 'request-status',
            url: '/request-status/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestStatus'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-status/request-status-detail.html',
                    controller: 'RequestStatusDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'RequestStatus', function($stateParams, RequestStatus) {
                    return RequestStatus.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'request-status',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('request-status-detail.edit', {
            parent: 'request-status-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status/request-status-dialog.html',
                    controller: 'RequestStatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestStatus', function(RequestStatus) {
                            return RequestStatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-status.new', {
            parent: 'request-status',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status/request-status-dialog.html',
                    controller: 'RequestStatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                code: null,
                                description: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('request-status', null, { reload: 'request-status' });
                }, function() {
                    $state.go('request-status');
                });
            }]
        })
        .state('request-status.edit', {
            parent: 'request-status',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status/request-status-dialog.html',
                    controller: 'RequestStatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestStatus', function(RequestStatus) {
                            return RequestStatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-status', null, { reload: 'request-status' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-status.delete', {
            parent: 'request-status',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status/request-status-delete-dialog.html',
                    controller: 'RequestStatusDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['RequestStatus', function(RequestStatus) {
                            return RequestStatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-status', null, { reload: 'request-status' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
