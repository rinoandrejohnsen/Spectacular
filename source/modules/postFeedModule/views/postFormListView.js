define(['source/common/infrastructure/view'], function(View) {
    var PostFormListView = function(postFormListContainer) {
        View.call(this);

        var that = this;

        var template = function() {
            var theList = '<div class="aside-tool"><table class="list-view"><tr><td><div class="load-module" style="color: #787878; cursor: pointer; padding-top: 11px;">Load Path Module</div></td></tr></table></div>';

            return theList;
        };

        this.setContainer(postFormListContainer);
        this.setTemplate(template());
    };

    PostFormListView.prototype = Object.create(View.prototype);
    PostFormListView.prototype.constructor = PostFormListView;

    return PostFormListView;
});