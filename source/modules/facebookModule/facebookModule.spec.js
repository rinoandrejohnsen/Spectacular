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