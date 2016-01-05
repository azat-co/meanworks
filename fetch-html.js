var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);


module.exports = function(url, cb){
  client
    .once('error', function(e){
      console.error('Please have webdriver running in a separate window: webdriver-manager start')
      console.error('WebdriverIO is not happy. Most likely the connection to Selenium fails')
    })
    .init()
    .url(url)
    .getHTML('body', cb)
    .end()
}
