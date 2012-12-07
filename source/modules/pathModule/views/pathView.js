define(['source/common/infrastructure/view'], function(View) {
    
    var PathView = function(pathContainer) {
        View.call(this);
        
        var that = this;
        
        var template = function() {
            var theList = '<div style="margin-left: auto; margin-right: auto; margin-top: 20px;"><p style="text-align: left; margin-left: 15px; color: #787878;">Path</p><div style="width: 85%; height:100%; margin-left: auto; margin-right: auto; background-color: #d8513e; box-shadow: 0px 0px 10px; padding: 6px;"><textarea rows="4" style="display: block; width: 100%; height: 100%; padding: 0; resize: none;"></textarea><label style="font-size: 11px; font-family: tahoma,verdana,arial,sans-serif;font-weight: bold;color:white;padding: 5px;margin-top: 13px;margin-right: -6px;box-shadow: 0px 0px 5px black;float:right;background-color: #d8513e;">Post</label></div></div>';
            
            return theList;
        };
        
        this.setContainer(pathContainer);
        this.setTemplate(template());
        
        // Overriding the base implementation
        this.render = function() {
            that.getContainer().innerHTML += that.getTemplate();
        };
    };

    PathView.prototype = Object.create(View.prototype);
    PathView.prototype.constructor = PathView;

    return PathView;
});