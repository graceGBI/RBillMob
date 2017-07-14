Rbill.angular.controller('MonCompteController', ['$scope', '$compile', '$rootScope', function($scope, $compile, $rootScope) {


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

}]);