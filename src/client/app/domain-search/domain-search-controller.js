angular.module('domain-search').controller('elasticCtrl', ['$scope', 'elasticSrvc', '$location',
    function($scope, elasticSrvc, $location) {

        var initChoices = [
          'monitoring',
          'branding',
          'analytics'
        ];

        var randPick = Math.floor(Math.random() * initChoices.length);

        $scope.urls = [];

        $scope.searchTerm = $location.search().q || initChoices[randPick];

        $scope.search = function() {
            $scope.urls = [];
            $location.search({'q': $scope.searchTerm});
            $scope.loadResults();
        };

        $scope.loadResults = function() {
            elasticSrvc.searchQuery($scope.searchTerm).then(function(results) {
                $scope.urls = elasticSrvc.hitsOut;
            });
        };

        $scope.loadResults();

    }
]);
