define(['underscore', 'jquery', 'backbone'], function(_, $, Backbone) {
    var PostModel = Backbone.Model.extend({
        defaults: {
            part1: 'hello',
            part2: 'world'
        }
    });

    return PostModel;
});

