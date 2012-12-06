define(function() {
    
    var ModuleAService = function() {
        debugger;
        this.getModel = function() {
            return 'model';
        };
    };

    ModuleAService.prototype = {
        constructor: ModuleAService
    };

    return ModuleAService;
});