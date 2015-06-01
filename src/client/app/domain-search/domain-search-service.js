
angular.module('domain-search').factory('elasticSrvc', ['$q', '$http', 'ELASTIC_URL',
    function($q, $http, ELASTIC_URL) {

        var searchURL = ELASTIC_URL + 'urls/url/_search'
        var hitsOut =[];

        return {
            searchQuery: function(term) {
                var deferred = $q.defer();
                var bodySearch = {query :
                    {match: {
                            _all: term
                        }
                    }
                };

                $http({method: 'POST', url: searchURL, data: bodySearch})
                    .success(function(response) {
                        var hitsIn;
                        
                        hitsIn = (response.hits || {}).hits || [];

                        for (var i = 0; i < hitsIn.length; i++) {
                            hitsOut.push(hitsIn[i]._source);
                        }

                        deferred.resolve(hitsOut);
                    })
                    .error(function(response, status) {
                        deferred.reject(response, status);
                    });
                return deferred.promise;

            },
            hitsOut : hitsOut
        }
    }
]);
