define(['source/common/infrastructure/view'], function(View) {

    var PostFeedView = function(postFeedContainer) {
        View.call(this);

        var postFeedCollection = null;

        var that = this;

        var template = function() {
            var theList = '';
            debugger;
            if (that.getCollection() !== null) {
                for (var i = 0; i < that.getCollection().get().length; i++) {
                    theList += '<div class="post" style=background-color:' + that.getCollection().get()[i].type.color + ';"><h1>' + that.getCollection().get()[i].text + '</h1></div>';
                }
            }

            return theList;
        };
        
        this.getTemplate = function() {
            return template();
        };
        
        this.getCollection = function() {
            return postFeedCollection;
        };

        this.setCollection = function(collection) {
            postFeedCollection = collection;
        };

        this.setContainer(postFeedContainer);
        this.setTemplate(template());
    };

    PostFeedView.prototype = Object.create(View.prototype);
    PostFeedView.prototype.constructor = PostFeedView;

    return PostFeedView;
});