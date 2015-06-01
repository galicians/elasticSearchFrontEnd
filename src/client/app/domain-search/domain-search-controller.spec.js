
describe('domain-search-controller', function() {
    var scope = {};
    var searchCtrl;
    var $httpBackend;
    var searchResult;
    var initChoices = [
          'monitoring',
          'branding',
          'analytics'
        ];

    beforeEach(module('signal'));

    beforeEach(inject(function($controller, $injector) {
        searchCtrl = $controller('elasticCtrl', {$scope: scope});
        $httpBackend = $injector.get('$httpBackend');
        elasticURL = $injector.get('ELASTIC_URL') + 'urls/url/_search';
        searchResult = {hits: {hits:[{_index: 'urls', _type: 'url', _id: 1, _source: 'signal data'}]}};
    }));

    it('should be initalized with the default searches', function() {
        expect(initChoices).toContain(scope.searchTerm);
    });

    describe('after triggering a call to the elastic service', function() {

        beforeEach(function() {
            $httpBackend.when("POST", elasticURL).respond(searchResult);
        })

        it('should recieve the search result', function() {
            $httpBackend.flush()
            expect(scope.urls).toEqual(['signal data'])
        });

    })


});