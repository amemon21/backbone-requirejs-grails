var App = {};

require.config({
    baseUrl: '/js',
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        handlebars: 'lib/handlebars'
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require([ 'jquery', 'backbone', 'router' ], function($, Backbone, Router){

    App.router = new Router();

});