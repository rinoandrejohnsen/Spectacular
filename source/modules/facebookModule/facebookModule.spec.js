define({
    facebookView: {
        create: {
            module: 'source/modules/facebookModule/views/facebookView',
            args: [
                {$ref: 'asideRegion'},
                {$ref: 'postFeedService'}
            ]
        },
        init: {
            render: ''
        }
    },
    domNode: {$ref: 'asideRegion'},
    facebookController: {
        create: {
            module: 'source/modules/facebookModule/controllers/facebookController',
            args: [
                {$ref: 'postFeedService'}
            ]
        },
        on: {
            domNode: {
                'click:.facebooklabel': 'findFacebookPost | addItem | resetFacebookPost'
            }
        }
    },
    findFacebookPost: {module: 'source/modules/facebookModule/findFacebookPost'},
    resetFacebookPost: {module: 'source/modules/facebookModule/resetFacebookPost'},
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