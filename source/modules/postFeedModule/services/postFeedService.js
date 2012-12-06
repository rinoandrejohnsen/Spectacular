define(function() {
    
    var ModuleAService = function() {
        this.getModel = function() {
            return 'model';
        };
    };

    ModuleAService.prototype = {
        constructor: ModuleAService
    };

    return ModuleAService;
});