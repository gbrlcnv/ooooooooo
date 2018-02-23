(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('request-doc', {
            parent: 'entity',
            url: '/request-doc',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestDocs'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-doc/request-docs.html',
                    controller: 'RequestDocController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
            }
        })
        .state('request-doc-detail', {
            parent: 'request-doc',
            url: '/request-doc/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'RequestDoc'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/request-doc/request-doc-detail.html',
                    controller: 'RequestDocDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                entity: ['$stateParams', 'RequestDoc', function($stateParams, RequestDoc) {
                    return RequestDoc.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'request-doc',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('request-doc-detail.edit', {
            parent: 'request-doc-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-doc/request-doc-dialog.html',
                    controller: 'RequestDocDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestDoc', function(RequestDoc) {
                            return RequestDoc.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-doc.new', {
            parent: 'request-doc',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-doc/request-doc-dialog.html',
                    controller: 'RequestDocDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                submissionDate: null,
                                updateDate: null,
                                description: null,
                                inOut: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('request-doc', null, { reload: 'request-doc' });
                }, function() {
                    $state.go('request-doc');
                });
            }]
        })
        .state('request-doc.edit', {
            parent: 'request-doc',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-doc/request-doc-dialog.html',
                    controller: 'RequestDocDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RequestDoc', function(RequestDoc) {
                            return RequestDoc.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-doc', null, { reload: 'request-doc' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('request-doc.delete', {
            parent: 'request-doc',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/request-doc/request-doc-delete-dialog.html',
                    controller: 'RequestDocDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['RequestDoc', function(RequestDoc) {
                            return RequestDoc.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('request-doc', null, { reload: 'request-doc' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
