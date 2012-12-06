define({
    moduleBView: {
        create: {module: 'source/modules/moduleB/views/moduleBView', args: [{$ref: 'service'}]}
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