angular.module('formlyApp', ['formly', 'formlyBootstrap']);
angular.module('formlyApp').run(function (formlyConfig) {
    formlyConfig.setType({
        name: 'input',
        template: 'hello world'


    });

});