define({
    ticker: {
        create: {
            module: 'source/modules/tickerModule/ticker',
            args: [
                {$ref: 'postFeedService'},
                {$ref: 'data'}
            ]
        },
        init: {
            tickerStart: ''
        }
    },
    data: {
        module: 'source/modules/tickerModule/data/data'
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
        {module: 'wire/connect'},
        {module: 'wire/on'}
    ]
});

