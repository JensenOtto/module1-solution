(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.txtvalue = "";
  $scope.res = "";

  $scope.check = function(){
    if ($scope.txtvalue.length==0) {
      $scope.res = "Please enter data first";
      return;
    }
    var val = $scope.txtvalue;
    var resVal = val.split(',');
    if (resVal.length<=3) {
        $scope.res = "Enjoy!";
    }else {
        $scope.res = "Too much!";
    }
  };
  }

})();
