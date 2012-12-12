define(function() {
    function FacebookController(postFeedService) {
        var postFeedItems = null;
        var that = this;

        postFeedItems = postFeedService.getPostFeedItems();

        this.addItem = function(item) {
            if (item !== '') {
                var model = {
                    id: 1,
                    type: {
                        id: "(Spec)tacular user",
                        icon: "source/modules/facebookModule/resources/icons/facebook.jpg",
                        color: "#3b5b96"
                    },
                    text: item
                };
                postFeedItems.add(model);
            }
        };
    };

    FacebookController.prototype = {
        constructor: FacebookController
    };

    return FacebookController;
});