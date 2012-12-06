define(['source/common/infrastructure/view'], function(View) {
    
    var postFeedContainer = null;
    
    var PostFeedView = function(container) {
        View.call(this);
        
        var that = this;
        
        postFeedContainer = container;
        
        var template = function() {
            var theList = '<div id="the-list"><h2></h2><table class="list-view"><thead></thead><tbody></tbody></table></div>';
            
            return theList;
        };
        
        this.setContainer(postFeedContainer);
        this.setTemplate(template());
    };

    PostFeedView.prototype = Object.create(View.prototype);
    PostFeedView.prototype.constructor = PostFeedView;

    return PostFeedView;
});