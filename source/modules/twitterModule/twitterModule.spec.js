define({
    domNode: {$ref: 'asideRegion'},
    twitterController: {
        create: {
            module: 'source/modules/twitterModule/controllers/twitterController',
            args: [
                {$ref: 'postFeedService'}
            ]
        },
        on: {
            domNode: {
                'click:.twitterlabel': 'findFacebookPost | addItem | resetFacebookPost'
            }
        }
    },
    twitterView: {
        create: {
            module: 'source/modules/twitterModule/views/twitterView', 
            args: [
                {$ref: 'asideRegion'}
            ]
        },
        init: {
            render: ''
        }
    },
    findFacebookPost: {module: 'source/modules/twitterModule/findTwitterPost'},
    resetFacebookPost: {module: 'source/modules/twitterModule/resetTwitterPost'},
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