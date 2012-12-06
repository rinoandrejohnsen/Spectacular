define(['source/common/infrastructure/observableCollection'], function(ObservableCollection) {
    
    var postFeedItems = null;
    
    var postFeedService = function() {
        
        postFeedItems = new ObservableCollection();
        
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