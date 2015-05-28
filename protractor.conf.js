
// conf.js
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/client/tests/e2e/*.e2e.spec'],
    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
    capabilities: {
        browserName: 'chrome'
    }
};
