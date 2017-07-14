Rbill.angular.controller('SearchPageController', ['$scope', '$compile', '$http', 'InitService', '$rootScope', function($scope, $compile, $http, InitService, $rootScope) {

    var self = this;
    $scope.boutiques = [];

    $scope.init = function() {
        console.log("init search");
        ax.ServerCall("list", "company", null, null, function(e) {
            console.log(e);
            $scope.boutiques = e;
            $scope.$apply();
        }, function(e) {
            console.log(e)
        });
    };

    $scope.tata = function(text) {
        console.log(text);
        var data = {};
        if (text.length > 0)
            data.company_name = text;
        ax.ServerCall("list", "company", data, null, function(e) {
            console.log(e);
            //$scope.boutiques = e;
            //$scope.$apply();
        }, function(e) {
            console.log(e)
        });

    };

    InitService.addEventListener('ready', function() {
        console.log("coooool !")
    });

}]);
console.log("je suis chargé")