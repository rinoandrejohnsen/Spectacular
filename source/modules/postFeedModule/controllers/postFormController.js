define(function() {
    
    function PostFeedController() {

        var that = this;
        
        this.pathModule = {};
        
        this.loadPathModule = function() {
            new that.pathModule();
        };
    }

    PostFeedController.prototype = {
        constructor: PostFeedController
    };

    return PostFeedController;
});