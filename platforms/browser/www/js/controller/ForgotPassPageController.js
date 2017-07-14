Rbill.angular.controller('ForgotPassPageController', ['$scope', '$compile', '$http', 'InitService', '$rootScope', function($scope, $compile, $http, InitService, $rootScope) {
    $scope.user_email = "";

    $scope.passwordforgot = function() {
        var emailForgot = $scope.user_email;
        if (!emailForgot && ax.isEmail(emailForgot)) {
            $(".profile_updated").show();
            setTimeout(function() {
                $(".profile_updated").hide();
            }, 800);
        } else {
            console.log("take this : " + emailForgot);

            Rbill.fw7.app.showPreloader('Veuillez patienter');
            //Method, Entity, Data, ID, success, error
            ax.ServerCall("forgotpwd", "user", { "email": emailForgot }, null, function(e) {
                //console.log(e);
                Rbill.fw7.app.hidePreloader();
                ax.alert("Vous recevrez un email pour réinitialiser votre mode de passe");
            }, function(e) {
                console.log(e);
                Rbill.fw7.app.hidePreloader();
                e = e.replace("Password Error : ", "");
                ax.popupmessage({
                    message: "" + e,
                    position: 1,
                    timer: 2500,
                    color: "#F00"
                });
            });
        }

    };

}]);