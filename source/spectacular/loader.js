(function (curl) {

    var config = {
        baseUrl: "",
        pluginPath: "curl/plugin",
        paths: {
            jquery: 'library/jquery/jquery',
            underscore: 'library/underscore/underscore'
        },
        packages: [
            {name: "backbone", location: 'library/backbone', main: 'backbone.js', config: {loader: 'curl/loader/legacy', exports: 'Backbone.noConflict()', requires: ['jquery', 'underscore']}},
            {name: 'cola', location: 'library/cola', main: 'cola'},
            {name: "curl", location: "library/curl/src/curl", main: "../curl"},
            {name: "knockback", location: "library/knockback", main: "knockback"},
            {name: "knockout", location: "library/knockout", main: "knockout"},
            {name: "meld", location: "library/meld", main: "meld"},
            {name: 'poly', location: 'library/poly', main: 'poly'},
            {name: "when", location: "library/when", main: "when"},
            {name: "wire", location: "library/wire", main: "./wire"}
        ],
        preloads: ['poly/all'],
        locale: false
    };

    curl(config, ["source/spectacular/application"]).then(done, failure);

    function done (App) {
        try {
            var app = new App();
            app.onLaunch();
        }
        catch (error) {
            failure(error);
        }
    }

    function failure (error) {
        console.log("An error occurred.", error.message);

        if (error.stack) {
            console.log(error.stack);
        }
    }

})(this.curl);