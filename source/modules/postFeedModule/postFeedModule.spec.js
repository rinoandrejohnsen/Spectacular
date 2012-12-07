define({
    loadModule: {
        $ref: 'asideRegion'
    },
    postFeedView: {
        create: {
            module: 'source/modules/postFeedModule/views/postFeedView',
            args: [
                {$ref: 'mainRegion'}
            ]
        },
        init: {
            render: ''
        }
    },
    postFormListView : {
        create: {
            module: 'source/modules/postFeedModule/views/postFormListView',
            args: [
                {$ref: 'asideRegion'}
            ]
        },
        init: {
            render: ''
        }
    },
    postFeedController: {
        create: {
            module: 'source/modules/postFeedModule/controllers/postFeedController',
            args: [
                {$ref: 'postFeedView'},
                {$ref: 'postFeedService'}
            ]
        }
    },
    postFormController: {
        create: {
            module: 'source/modules/postFeedModule/controllers/postFormController'
        },
        properties: {
            pathModule: {$ref: 'pathModule'}
        },
        on: {
            loadModule: {
                'click:.load-module': 'loadPathModule'
            }
        }
    },
    postFeedService: {
        create: {module: 'source/modules/postFeedModule/services/postFeedService'}
    },
    plugins: [
        {module: 'cola'},
        {module: 'wire/aop'},
        {
            module: 'wire/debug',
            trace: {pointcut: /^((?!(model$|constructor$|_)).*)$/}
        },
        {
            module: 'wire/dom',
            classes: {init: 'loading'}
        },
        {module: 'wire/dom/render'},
        {module: 'wire/domReady'},
        {module: 'wire/connect'},
        {module: 'wire/on'}
    ]
});