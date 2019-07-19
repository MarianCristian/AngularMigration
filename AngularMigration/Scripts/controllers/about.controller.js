(function () {
    'use strict';

    angular
        .module('app')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    function AboutController($scope) {
        $scope.message = 'AngularJS';

        activate();

        function activate() { }
    }
})();
