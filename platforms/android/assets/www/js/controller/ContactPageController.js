Rbill.angular.controller('ContactPageController', ['$scope', '$compile', '$http', 'InitService', '$rootScope', function($scope, $compile, $http, InitService, $rootScope) {

    $scope.sendQuestion = function() {
        console.log("name:" + $scope.name + "firstname:" + $scope.firstname +
            "email: " + $scope.email + " phone :" + $scope.phone + "question : " + $scope.question);
        var data = {};
        data.r_bill_id = "8";
        data.contact_object = "j'ai une idée";
        data.email = $scope.email;
        data.phone = $scope.phone;
        data.subject = "j'ai une idée";
        data.message = $scope.question;

        ax.ServerCall("post", "contact_message", data, null, function(e) {
            console.log(e);
            //$scope.boutiques = e;
            //$scope.$apply();
        }, function(e) {
            console.log(e)
        });
    };

}]);