define({
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