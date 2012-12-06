define({
    theme: {module: 'css!source/spectacular/resources/styles/theme.css'},
    shell: {
        render: {
            template: {module: 'text!source/spectacular/resources/templates/shellTemplate.html'},
            replace: {module: 'i18n!source/common/infrastructure/constants'},
            css: {module: 'css!source/spectacular/resources/styles/shellStyle.css'}
        },
        insert: {at: 'dom.first!body'}
    },
    mainRegion: {
        render: {
            template: {module: 'text!source/spectacular/resources/templates/mainRegionTemplate.html'}
        },
        insert: {after: 'shell'}
    },
    asideRegion: {
        render: {
            template: {module: 'text!source/spectacular/resources/templates/asideRegionTemplate.html'}
        },
        insert: {after: 'mainRegion'}
    },
    service: {
        $ref: 'moduleA.moduleAService'
    },
    moduleA: {
        wire: {
            spec: 'source/modules/moduleA/moduleA.spec',
            provide: {
                node: {$ref: 'mainRegion'}
            }
        }
    },
    moduleB: {
        wire: {
            spec: 'source/modules/moduleB/moduleB.spec',
            provide: {
                node: {$ref: 'asideRegion'},
                service: {$ref: 'service'}
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