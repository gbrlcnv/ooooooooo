(function() {
    'use strict';
    angular
        .module('oooooooooApp')
        .factory('Request', Request);

    Request.$inject = ['$resource', 'DateUtils'];

    function Request ($resource, DateUtils) {
        var resourceUrl =  'api/requests/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.submissionDate = DateUtils.convertDateTimeFromServer(data.submissionDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
