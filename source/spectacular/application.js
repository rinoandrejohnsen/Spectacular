(function(curl) {
    var config = {
        baseUrl: '',
        locale: '',
        packages: [
            {name: 'cola', location: 'library/cola', main: 'cola'},
            {name: 'curl', location: 'library/curl/src/curl', main: 'curl'},
            {name: 'meld', location: 'library/meld', main: 'meld'},
            {name: 'wire', location: 'library/wire', main: 'wire'},
            {name: 'poly', location: 'library/poly', main: 'poly'},
            {name: 'when', location: 'library/when', main: 'when'},
            {name: 'wire', location: 'library/wire', main: 'wire'}
        ],
        preloads: ['poly/all']
    };

    try {
        curl(config, ['wire!source/spectacular/bootstrapper.spec']);
    }
    catch (error) {
        console.log("Error wiring the bootstrapper. Message: " + error + ".");
    }
})(curl);