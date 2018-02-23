(function() {
    'use strict';
    angular
        .module('oooooooooApp')
        .factory('RequestStatus', RequestStatus);

    RequestStatus.$inject = ['$resource'];

    function RequestStatus ($resource) {
        var resourceUrl =  'api/request-statuses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
