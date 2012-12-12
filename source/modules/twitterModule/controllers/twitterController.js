define(function() {
    function TwitterController(postFeedService) {
        var postFeedItems = null;
        var that = this;

        postFeedItems = postFeedService.getPostFeedItems();

        this.addItem = function(item) {
            if (item !== '') {
                var model = {
                    id: 1,
                    type: {
                        id: "(Spec)tacular user",
                        icon: "source/modules/twitterModule/resources/icons/twitter.png",
                        color: "#3CBAFF"
                    },
                    text: item
                };
                postFeedItems.add(model);
            }
        };
    };

    TwitterController.prototype = {
        constructor: TwitterController
    };

    return TwitterController;
});