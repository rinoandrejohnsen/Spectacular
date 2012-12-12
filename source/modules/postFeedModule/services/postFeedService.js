define(['source/common/infrastructure/observableCollection'], function(ObservableCollection) {
    var postFeedService = function() {
        var postFeedItems = new ObservableCollection();

        this.getPostFeedItems = function() {
            return postFeedItems;
        };

        this.addPostFeedItem = function(item) {
            // @TODO: Add check for basemodel inheritence 
            postFeedItems.add(item);
        };
    };

    postFeedService.prototype = {
        constructor: postFeedService
    };

    return postFeedService;
});