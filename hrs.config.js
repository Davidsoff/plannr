module.exports = {
    proxy: {
    },

    // RegExp or function (filename) {...}
    hotRule: /\.(html|htm|css|js)$/, // default: /\.(html|htm)$/

    setUp: function (app) {
        /* app is an express server object. */

        // http://localhost:8082/test
        app.get('/test', function (req, res) {
            res.end("TEST!");
        });
    }
};
