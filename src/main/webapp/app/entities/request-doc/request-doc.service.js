(function() {
    'use strict';
    angular
        .module('oooooooooApp')
        .factory('RequestDoc', RequestDoc);

    RequestDoc.$inject = ['$resource', 'DateUtils'];

    function RequestDoc ($resource, DateUtils) {
        var resourceUrl =  'api/request-docs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.submissionDate = DateUtils.convertDateTimeFromServer(data.submissionDate);
                        data.updateDate = DateUtils.convertDateTimeFromServer(data.updateDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
