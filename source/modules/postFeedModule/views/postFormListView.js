define(['source/common/infrastructure/view'], function(View) {
    
    var postFormListContainer = null;
    
    var PostFormListView = function(container) {
        View.call(this);
        
        var that = this;
        
        postFormListContainer = container;
        
        var template = function() {
            var theList = '<div id="the-list"><h2></h2><table class="list-view"><thead></thead><tbody></tbody></table></div>';
            
            return theList;
        };
        
        this.setContainer(postFormListContainer);
        this.setTemplate(template());
    };

    PostFormListView.prototype = Object.create(View.prototype);
    PostFormListView.prototype.constructor = PostFormListView;

    return PostFormListView;
});