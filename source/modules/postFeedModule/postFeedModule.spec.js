define({
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