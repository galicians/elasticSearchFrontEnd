
describe('domain-search-service', function() {
    var elasticService;
    var searchResult;
    var elasticURL;
    var $httpBackend;
    var result;
    var error;

    beforeEach(module('signal'));

    beforeEach(inject(function($injector) {
        var createService = function() {
            return $injector.get('elasticSrvc');
        };

        elasticURL = $injector.get('ELASTIC_URL') + 'urls/url/_search';
        $httpBackend = $injector.get('$httpBackend');
        elasticService = createService();
        searchResult = {hits: {hits:[{_index: 'urls', _type: 'url', _id: 1, _source: 'signal data'}]}};
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    describe('when a search gets done', function() {

        it('should send a POST request to the elastic search server', function() {
            $httpBackend.expectPOST(elasticURL).respond(200, searchResult);
            elasticService.searchQuery();
        });
 
        it('should receive the data from the server ', function() {
            $httpBackend.expectPOST(elasticURL).respond(200, searchResult);
            elasticService.searchQuery().then(function(data) {
                result = data;
            })
            $httpBackend.flush();
            expect(result[0]).toEqual('signal data');
        });

        it('should catch the error when API sends error code', function() {
            $httpBackend.expectPOST(elasticURL).respond(500, { error: 'wrong query syntax' });
            elasticService.searchQuery().catch(function(e) { error = e.error})
            $httpBackend.flush();
            expect(error).toEqual('wrong query syntax');
        });
    });
});
