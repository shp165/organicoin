var app = angular.module('myapp', ['ngMaterial']);

app.controller('myctrl', ['$scope', '$mdSidenav', function($scope){
  $scope.user = {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    };
}]);
