define({
    domNode: {$ref: 'asideRegion'},
    pathController: {
        create: {
            module: 'source/modules/pathModule/controllers/pathController',
            args: [
                {$ref: 'postFeedService'}
            ]
        },
        on: {
            domNode: {
                'click:.pathlabel': 'findPathPost | addItem | resetPathPost'
            }
        }
    },
    pathView: {
        create: {
            module: 'source/modules/pathModule/views/pathView', 
            args: [
                {$ref: 'asideRegion'}
            ]
        },
        init: {
            render: ''
        }
    },
    findPathPost: {module: 'source/modules/pathModule/findPathPost'},
    resetPathPost: {module: 'source/modules/pathModule/resetPathPost'},
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
        {module: 'wire/connect'},
        {module: 'wire/on'}
    ]
});