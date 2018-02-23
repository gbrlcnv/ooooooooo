(function() {
    'use strict';
    angular
        .module('oooooooooApp')
        .factory('RequestStatusLog', RequestStatusLog);

    RequestStatusLog.$inject = ['$resource', 'DateUtils'];

    function RequestStatusLog ($resource, DateUtils) {
        var resourceUrl =  'api/request-status-logs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.statusFromDate = DateUtils.convertDateTimeFromServer(data.statusFromDate);
                        data.statusChangeDate = DateUtils.convertDateTimeFromServer(data.statusChangeDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
