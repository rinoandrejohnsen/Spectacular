define(["curl"],
    function (curl) {
        function Bootstrapper () {
            this.run = function () {
                curl(['wire!./source/spectacular/bootstrapper.spec'], function (context) {
                    console.log(context);
                });
            };
        }

        Bootstrapper.prototype.constructor = Bootstrapper;

        return Bootstrapper;
    }
);