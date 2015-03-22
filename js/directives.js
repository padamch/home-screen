app.directive('deleteApp', ['AppService',function(AppService) {
    return {
        link: function(scope, elt, attrs) {
            scope.deleteApp = function(index) {
            	elt.remove();
            	//AppService.deleteApp(index);
            }; 
        }
    }
}]);
