(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('request-status-log', {
            parent: 'entity',
            url: '/request-status-log',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestStatusLogs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-status-log/request-status-logs.html',
                    controller: 'RequestStatusLogController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('request-status-log-detail', {
            parent: 'request-status-log',
            url: '/request-status-log/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestStatusLog'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-status-log/request-status-log-detail.html',
                    controller: 'RequestStatusLogDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'RequestStatusLog', function($stateParams, RequestStatusLog) {
                    return RequestStatusLog.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'request-status-log',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('request-status-log-detail.edit', {
            parent: 'request-status-log-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status-log/request-status-log-dialog.html',
                    controller: 'RequestStatusLogDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestStatusLog', function(RequestStatusLog) {
                            return RequestStatusLog.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-status-log.new', {
            parent: 'request-status-log',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status-log/request-status-log-dialog.html',
                    controller: 'RequestStatusLogDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                note: null,
                                statusFromDate: null,
                                statusChangeDate: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('request-status-log', null, { reload: 'request-status-log' });
                }, function() {
                    $state.go('request-status-log');
                });
            }]
        })
        .state('request-status-log.edit', {
            parent: 'request-status-log',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status-log/request-status-log-dialog.html',
                    controller: 'RequestStatusLogDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestStatusLog', function(RequestStatusLog) {
                            return RequestStatusLog.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-status-log', null, { reload: 'request-status-log' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-status-log.delete', {
            parent: 'request-status-log',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-status-log/request-status-log-delete-dialog.html',
                    controller: 'RequestStatusLogDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['RequestStatusLog', function(RequestStatusLog) {
                            return RequestStatusLog.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-status-log', null, { reload: 'request-status-log' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
