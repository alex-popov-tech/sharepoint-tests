const { getJasmineAllureReporter } = require('allure-cookies');
jasmine.getEnv().addReporter(getJasmineAllureReporter({ basePath: './report', resultsDir: 'allure-results' }))
