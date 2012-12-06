define({
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