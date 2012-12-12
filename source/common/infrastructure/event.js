define(function() {
    function Event(sender) {
        var sender = sender;
        var listeners = [];

        this.attach = function(listener) {
            listeners.push(listener);
        };

        this.notify = function(args) {
            var index;

            for (index = 0; index < listeners.length; index += 1) {
                listeners[index](sender, args);
            }
        };
    };

    Event.prototype = {
        constructor: Event
    };

    return Event;
});