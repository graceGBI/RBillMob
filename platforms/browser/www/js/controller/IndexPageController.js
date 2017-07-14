Rbill.angular.controller('IndexPageController', ['$scope', '$compile', '$http', 'InitService', '$rootScope', function($scope, $compile, $http, InitService, $rootScope) {

    var self = this;

    /* $scope.init = function() {
         console.log("initing");
         ax.login("toto@toto.com", "toto", function(e) {
             console.log(e)
         }, function(e) {
             console.log(e)
         });
     };*/

    $scope.boutiques = [];

    $scope.init = function() {
        console.log("init index");
        ax.ServerCall("list", "company", null, null, function(e) {
            console.log(e);
            $scope.boutiques = e;
            $scope.$apply();
        }, function(e) {
            console.log(e)
        });
    };

    InitService.addEventListener('ready', function() {
        console.log("coooool !")
    });

}]);