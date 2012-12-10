define(['underscore', 'jquery', 'backbone', 'source/spectacular/postModel'], function(_, $, Backbone, PostItem) {
    var PostCollection = Backbone.Collection.extend({
        model: PostItem
    });

    return PostCollection;
});