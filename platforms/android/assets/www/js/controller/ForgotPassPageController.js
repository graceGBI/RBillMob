Rbill.angular.controller('ForgotPassPageController', ['$scope', '$compile', '$http', 'InitService', 'DataService', '$rootScope', function($scope, $compile, $http, InitService, DataService, $rootScope) {

    var rootEvents = [];

    $scope.user_email = "";

    $scope.init = function() {

    };

    $scope.passwordfotgot = function() {
        var test = $scope.user_email;
        if (!test) {
            $(".profile_updated").show();
            setTimeout(function() {
                $(".profile_updated").hide();
            }, 800);
        } else {
            console.log("take this : " + test);
            //Method, Entity, Data, ID, success, error
            ax.ServerCall("forgotpwd", "user", { "email": test }, null, function(e) {
                //console.log(e);
                ax.alert("Vous recevrez un email pour réinitialiser votre mode de passe");
            }, function(e) {
                //console.log(e);
                ax.alert("Votre adresse email n'est pas reconnue");
            });
        }

    };

}]);