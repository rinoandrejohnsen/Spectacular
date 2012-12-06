define(['source/common/infrastructure/view'], function(View) {
    
    var facebookContainer = null;
    
    var FacebookView = function(container) {
        View.call(this);
        
        var that = this;
        
        facebookContainer = container;
        
        var template = function() {
            var theList = '<div style="margin-left: auto; margin-right: auto; margin-top: 20px;"><p style="text-align: left; margin-left: 15px; color: #787878;">Facebook</p><div style="width: 85%; height:100%; margin-left: auto; margin-right: auto; background-color: #5771a3; box-shadow: 0px 0px 10px; padding: 6px;"><textarea rows="4" style="display: block; width: 100%; height: 100%; padding: 0; resize: none;"></textarea><label style="font-size: 11px; font-family: tahoma,verdana,arial,sans-serif;font-weight: bold;color:white;padding: 5px;margin-top: 13px;margin-right: -6px;box-shadow: 0px 0px 5px black;float:right;background-color: #5771a3;">Post</label></div></div>';
            
            return theList;
        };
        
        this.setContainer(facebookContainer);
        this.setTemplate(template());
        
        this.render = function() {
            var oldTemplate = that.getContainer().innerHTML;
            var newTemplate= oldTemplate += that.getTemplate();
            that.getContainer().innerHTML = newTemplate;
        };
    };

    FacebookView.prototype = Object.create(View.prototype);
    FacebookView.prototype.constructor = FacebookView;

    return FacebookView;
});