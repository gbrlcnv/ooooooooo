(function() {
    'use strict';
    angular
        .module('oooooooooApp')
        .factory('DocStore', DocStore);

    DocStore.$inject = ['$resource', 'DateUtils'];

    function DocStore ($resource, DateUtils) {
        var resourceUrl =  'api/doc-stores/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.creationDate = DateUtils.convertDateTimeFromServer(data.creationDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
