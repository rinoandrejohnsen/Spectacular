define(function() {
    function PostFeedController(view, postFeedService) {
        var postFeedItems = null;
        var that = this;

        postFeedItems = postFeedService.getPostFeedItems();
        postFeedItems.collectionChanged.attach(function() {
            that.collectionChangedHandler();
        });

        this.collectionChangedHandler = function() {
            view.setCollection(postFeedItems);
            view.render();
        };
    };

    PostFeedController.prototype = {
        constructor: PostFeedController
    };

    return PostFeedController;
});