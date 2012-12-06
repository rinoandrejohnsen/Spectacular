define({
    moduleAView: {
        create: {module: 'source/modules/moduleA/views/moduleAView'}
    },
    moduleAService: {
        create: {module: 'source/modules/moduleA/services/moduleAService'}
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