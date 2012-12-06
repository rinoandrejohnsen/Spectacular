define({
    theme: {module: 'css!source/spectacular/resources/styles/theme.css'},
    headerRegion: {
        render: {
            template: {module: 'text!source/spectacular/resources/templates/headerRegionTemplate.html'},
            replace: {module: 'i18n!source/common/infrastructure/constants'},
            css: {module: 'css!source/spectacular/resources/styles/shellStyle.css'}
        },
        insert: {at: 'dom.first!body'}
    },
    mainRegion: {
        render: {
            template: {module: 'text!source/spectacular/resources/templates/mainRegionTemplate.html'}
        },
        insert: {after: 'headerRegion'}
    },
    asideRegion: {
        render: {
            template: {module: 'text!source/spectacular/resources/templates/asideRegionTemplate.html'}
        },
        insert: {after: 'mainRegion'}
    },
    postFeedService: {
        $ref: 'postFeedModule.postFeedService'
    },
    postFeedModule: {
        wire: {
            spec: 'source/modules/postFeedModule/postFeedModule.spec',
            provide: {
                mainRegion: {$ref: 'mainRegion'},
                asideRegion: {$ref: 'asideRegion'}
            }
        }
    },
    moduleB: {
        wire: {
            spec: 'source/modules/moduleB/moduleB.spec',
            provide: {
                node: {$ref: 'asideRegion'},
                service: {$ref: 'postFeedService'}
            }
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