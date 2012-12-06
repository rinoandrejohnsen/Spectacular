define(function() {
    
    var moduleAService = null;
    
    var ModuleAView = function(rino) {
        debugger;
        this.setService = function(service) {
            moduleAService = service;
            debugger;
        };
    };

    ModuleAView.prototype = {
        constructor: ModuleAView
    };

    return ModuleAView;
});