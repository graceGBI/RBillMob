Rbill.angular.controller('RegisterPageController', ['$scope', '$compile', '$http', 'InitService', '$rootScope', function($scope, $compile, $http, InitService, $rootScope) {

    $scope.reg_pass = ""; //"dochill";
    $scope.reg_email = ""; //"bandzagilles@yahoo.fr";
    $scope.reg_pass_2 = ""; //"dochill";
    $scope.message_error = "";
    $scope.reg_name = "";

    $scope.init = function() {

        $scope.reg_pass = "";
        $scope.reg_email = "";
        $scope.reg_pass_2 = "";
        $scope.reg_name = "";
    };

    $scope.register_user = function() {

        var is_email = ax.isEmail($scope.reg_email);
        var pass_length_ok = ($scope.reg_pass.length > 6) ? true : false;
        var pass_equal = ($scope.reg_pass == $scope.reg_pass_2) ? true : false;

        if ($scope.reg_name == "")
            $scope.message_error = "Veillez saisir votre nom";
        else if ($scope.reg_name.length < 3)
            $scope.message_error = "Veillez saisir un nom avec plus de 3 caractères";
        else if (!is_email)
            $scope.message_error = "Votre email est incorrect";
        else if (!pass_length_ok)
            $scope.message_error = "Votre mot de passe est trop court";
        else if (!pass_equal)
            $scope.message_error = "Les mots de passe saisis ne sont pas égaux";
        else {
            $scope.message_error = "";
            Rbill.fw7.app.showIndicator();
            var formData = { email: $scope.reg_email, password: $scope.reg_pass, lastname: $scope.reg_name };
            ax.ServerCall("register", "user", formData, null, function() {
                Rbill.fw7.app.hideIndicator();
                ax.popupmessage({
                    message: "Votre compte a été créé !",
                    position: 1,
                    timer: 2500
                });
                Rbill.fw7.views[0].router.loadPage('pages/home.html');
            }, function(e) {
                e = e.replace("Password Error : ", "");
                ax.popupmessage({
                    message: "" + e,
                    position: 1,
                    timer: 2500,
                    color: "#F00"
                });
                Rbill.fw7.app.hideIndicator();
            });
        }

    };

    /*$scope.$on('$destroy', function() {
        for (var i = 0; i < rootEvents.length; i++) {
            rootEvents[i]();
        }
    });*/

}]);