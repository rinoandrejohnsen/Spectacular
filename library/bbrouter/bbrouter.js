(function() {
  define([
    'backbone',
    'jquery',
    'when'
],
function(Backbone, JQuery, When){;
  return function(options) {
    var createRouter, currentContext, initializeRouter, routeBinding;
    currentContext = null;
    createRouter = function(componentDefinition, wire) {
      return When.promise(function(resolve) {
        var tempRouter;
        if (componentDefinition.options.routerModule) {
          return wire.loadModule(componentDefinition.options.routerModule).then(function(Module) {
            var tempRouter;
            tempRouter = new Module;
            return resolve(tempRouter);
          }, function(error) {
            return console.error(error);
          });
        } else {
          tempRouter = new Backbone.Router();
          return resolve(tempRouter);
        }
      });
    };
    routeBinding = function(tempRouter, componentDefinition, wire) {
      var route, routeFn, spec, _ref, _results;
      _ref = componentDefinition.options.routes;
      _results = [];
      for (route in _ref) {
        spec = _ref[route];
        routeFn = (function(spec) {
          var index, key, keys, vars, _len;
          vars = {};
          if (arguments.length > 1) {
            keys = route.split(':').slice(1);
            for (index = 0, _len = keys.length; index < _len; index++) {
              key = keys[index];
              vars[key.replace('/', '')] = arguments[index + 1];
            }
          }
          return wire.loadModule(spec).then(function(specObj) {
            if (currentContext != null) currentContext.destroy();
            specObj.vars = vars;
            return wire.createChild(specObj).then(function(ctx) {
              currentContext = ctx;
              return window.ctx = ctx;
            }, function(error) {
              return console.error(error.stack);
            });
          });
        }).bind(null, spec);
        _results.push(tempRouter.route(route, route, routeFn));
      }
      return _results;
    };
    initializeRouter = function(resolver, componentDefinition, wire) {
      return createRouter(componentDefinition, wire).then(function(tempRouter) {
        routeBinding(tempRouter, componentDefinition, wire);
        return resolver.resolve(tempRouter);
      }, function(error) {
        return console.error(error.stack);
      });
    };
    return {
      context: {
        ready: function(resolver, wire) {
          Backbone.history.stop();
          Backbone.history.start();
          return resolver.resolve();
        }
      },
      destroy: {},
      factories: {
        bbRouter: initializeRouter
      }
    };
  };

  });

}).call(this);