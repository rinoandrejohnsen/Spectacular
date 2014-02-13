define(["./bootstrapper"],
    function (BootStrapper) {

        function Application () {
            var bootStrapper = new BootStrapper();
            bootStrapper.run();
        }

        Application.prototype.constructor = Application;
        Application.prototype.onLaunch = function () {
            console.log("Launching");
        };
        Application.prototype.onSuspend = function () {
            console.log("Suspending");
        };
        Application.prototype.onResume = function () {
            console.log("Resuming");
        };

        return Application;
    }
);