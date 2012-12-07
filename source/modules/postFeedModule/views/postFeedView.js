define(['source/common/infrastructure/view'], function(View) {

    var PostFeedView = function(postFeedContainer) {
        View.call(this);

        var postFeedCollection = null;

        var that = this;

        var template = function() {
            var theList = '';
            if (that.getCollection() !== null) {
                for (var i = 0; i < that.getCollection().get().length; i++) {
                    theList += '<div class="post"><table><tr><td style="width: 88%;"><div class="post-content"><h3 style="color:' + that.getCollection().get().reverse()[i].type.color + ';">' + that.getCollection().get().reverse()[i].type.id + '</h3><p>' + that.getCollection().get().reverse()[i].text + '</p></div></td><td><div class="post-tool" style="background-color:' + that.getCollection().get().reverse()[i].type.color + ';"><img style="padding: 5px;" src="' + that.getCollection().get().reverse()[i].type.icon + '" width="100px" height="100px"></div></td></tr></table></div>';
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