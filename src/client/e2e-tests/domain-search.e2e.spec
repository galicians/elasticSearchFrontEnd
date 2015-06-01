describe('domain-search page', function() {
    var searchButton = element(by.id('search-button'));

    beforeEach(function() {
        browser.get('http://localhost:4000/')
    });

    it('shoud have signal as a title', function() {
        expect(browser.getTitle()).toEqual('Signal')
    });

    it('should display 10 urls at a time', function() {
        expect(element.all(by.repeater('url in urls')).count()).toEqual(10);
    });

    it("should by default bring the results for content market monitoring", function() {
        var first = element.all(by.repeater('url in urls')).get(0)
        expect(first.getText()).toContain('content+market+monitoring');
    })
})