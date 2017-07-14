Rbill.angular.controller('LoginPageController', ['$scope', '$compile', '$http', 'InitService', '$rootScope', function($scope, $compile, $http, InitService, $rootScope) {

    $scope.log_email = ""; //bandzagilles@yahoo.fr";
    $scope.log_pass = ""; //dochill";

    $scope.login = function() {
        $scope.loading = true;
        Rbill.fw7.app.showPreloader('Veuillez patienter');

        ax.login($scope.log_email, $scope.log_pass, function(e, time) {

            Rbill.fw7.app.hidePreloader();

            if (!ax.user) ax.user = {};

            $scope.user_email = ax.user.email;
            $scope.user_lastname = ax.user.lastname;
            $scope.user_firstname = ax.user.firstname;

            registerForToken();

            $scope.$apply();
            Rbill.fw7.views[0].router.loadPage('pages/home.html');

        }, function(e) {

            Rbill.fw7.app.hidePreloader();

            var strMessage = "Une erreur s'est produite";

            if (e == "Login failed !") {
                strMessage = "Email ou mot de passe incorrect";
            } else {
                strMessage = e;
            }

            $scope.$apply();
            ax.popupmessage({
                message: strMessage,
                position: 1,
                timer: 1500,
                txclr: "#FFF",
                bgclr: "#FF0000"
            });

        });
    };


    $scope.logout = function() {

        ax.message("Quitter RBill ?", {
            oui: function() {

                ax.leave(function() {
                    $scope.logged = false;
                    $scope.init();
                    ax.popupmessage({
                        message: "Merci, @ bientôt !",
                        position: 1,
                        timer: 1500,
                        color: "#888"
                    });
                    $scope.$apply();
                });

            }
        });

    };

    /* $scope.$on('$destroy', function() {
         for (var i = 0; i < rootEvents.length; i++) {
             rootEvents[i]();
         }
     });*/
}]);