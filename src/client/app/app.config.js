angular.module('signal').config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
    function($locationProvider, $urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('search', {
                url: '/',
                templateUrl: '/src/client/app/domain-search/domain-search.html',
                controller: 'elasticCtrl'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }]);
