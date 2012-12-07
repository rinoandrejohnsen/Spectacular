define(function() {
    
    var View = function() {
        var viewTemplate = "";
        var viewContainer = "";
        
        this.getTemplate = function () {
            return viewTemplate;
        };
        
        this.setTemplate = function (template) {
            viewTemplate = template;
        };
    
        this.getContainer = function () {
            return viewContainer;
        };
        
        this.setContainer = function (container) {
            viewContainer = container;
        };
    
        this.render = function () {
            this.getContainer().innerHTML = this.getTemplate();
        };
    };
    
    View.prototype = {
        constructor: View    
    };

    return View;
});

