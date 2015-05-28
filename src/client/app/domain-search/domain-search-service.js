
angular.module('signal').factory('elasticSrvc', ['$q', '$location', 'esFactory',
    function($q, $location, elasticsearch) {

        var client = elasticsearch({
            host: $location.host() + ':9200'
        });

        var search = function(term) {
            var deferred = $q.defer();
            var query = {
                match: {
                    _all: term
                }
            };

            client.search({
                index: 'urls',
                type: 'url',
                body: {
                    size: 100,
                    from: 0,
                    query: query
                }
            }).then(function(result) {
                var hitsIn;
                var hitsOut = [];

                hitsIn = (result.hits || {}).hits || [];

                for (var i = 0; i < hitsIn.length; i++) {
                    hitsOut.push(hitsIn[i]._source);
                }

                deferred.resolve(hitsOut);
            }, deferred.reject);

            return deferred.promise;
        };

        return {
            search: search
        };
    }
]);
