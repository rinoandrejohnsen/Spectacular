define(function() {
    
    var postFeedItems = null;
    
    function FacebookController(postFeedService) {

        var that = this;
        
        postFeedItems = postFeedService.getPostFeedItems();
        
        this.addItem = function(item) {
            if (item !== '') {
                alert(item);    
            };
        };
    }

    FacebookController.prototype = {
        constructor: FacebookController
    };

    return FacebookController;
});