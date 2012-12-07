define(function() {
    
    var postFeedItems = null;
    
    function PathController(postFeedService) {

        var that = this;
        
        postFeedItems = postFeedService.getPostFeedItems();
        
        this.addItem = function(item) {
            if (item !== '') {
               var model = {
                    id: 1,
                    type: {
                        id: "(Spec)tacular user",
                        icon: "source/modules/pathModule/resources/icons/path.png",
                        color: "#d8513e"
                    },
                    text: item
                };
                postFeedItems.add(model);
            };
        };
    }

    PathController.prototype = {
        constructor: PathController
    };

    return PathController;
});