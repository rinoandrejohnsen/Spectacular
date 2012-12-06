define(function() {
    
    var postFeedItems = null;
    
    function PostFeedController(view, postFeedService) {

        var that = this;
        
        postFeedItems = postFeedService.getPostFeedItems();
        postFeedItems.collectionChanged.attach(function() {
            that.collectionChangedHandler();
        });
        
        this.collectionChangedHandler = function() {
            view.render();
            alert("Rino");
        };
    }

    PostFeedController.prototype = {
        constructor: PostFeedController
    };

    return PostFeedController;
});