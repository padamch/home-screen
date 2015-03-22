app.controller('IndexCtrl',['$scope','AppService', function($scope, AppService){
	$scope.$watch(function () {
    	return AppService.getHomeApps();
	},function(newVal, oldVal) {
        $scope.apps=newVal;
    }, true);

    $scope.deleteButtons = false;
}]);