define([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone){

    var Router =  Backbone.Router.extend({

        initialize: function() {
            Backbone.history.start({pushState: true});
        },

        routes: {
            'nothome' : 'notHome',
            ':catchall' : 'home',
            '' : 'home'
        },

        notHome: function(){
            $("#content").html("Not Home")
        },

        home: function(){
            $("#content").html("Home")
        }
    });

    return Router;
});