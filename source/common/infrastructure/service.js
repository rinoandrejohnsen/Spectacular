define(function() {

    function noop() {
    }

    function AppController() {
    }

    AppController.prototype = {
        showPrefs: function() {
            var self = this;
        },
        showNotes: noop,
        _showPrefs: noop,
        destroy: noop

    };

    return AppController;
});