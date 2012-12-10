define(['underscore', 'jquery', 'backbone', 'source/spectacular/postModel', 'source/spectacular/postView'], function(_, $, Backbone, PostModel, PostView) {
    var PostListView = Backbone.View.extend({
        //el: $('body'), // el attaches to existing element
        events: {
            'click button#add': 'addItem'
        },
        initialize: function(node, postCollection) {
            _.bindAll(this, 'render', 'addItem', 'appendItem'); // every function that uses 'this' as the current object should be in here
            this.el = node.el;
            this.collection = postCollection.collection;
            this.collection.bind('add', this.appendItem); // collection event binder

            this.counter = 0;
            this.render();
        },
        render: function() {
            var self = this;
            $(this.el).append("<button id='add'>Add list item</button>");
            $(this.el).append("<ul></ul>");
            _(this.collection.models).each(function(item) { // in case collection is not empty
                //self.appendItem(item);
            }, this);
        },
        addItem: function() {
            this.counter++;
            var item = new PostModel();
            item.set({
                part2: item.get('part2') + this.counter // modify item defaults
            });
            this.collection.add(item);
        },
        appendItem: function(item) {
            var itemView = new PostView(item);
            $('ul', this.el).append(itemView.render().el);
        }
    });

    return PostListView;
});