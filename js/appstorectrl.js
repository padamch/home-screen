app.controller('AppstoreCtrl',['$scope','AppService',function($scope,AppService){
    $scope.appstore =[
        {link:'app100',text:'app100'},
        {link:'app101',text:'app101'},
        {link:'app102',text:'app102'},
        {link:'app103',text:'app103'},
        {link:'app104',text:'app104'},
        {link:'app105',text:'app105'},
        {link:'app106',text:'app106'},
        {link:'app107',text:'app107'},
        {link:'app108',text:'app108'},
        {link:'app109',text:'app109'},
        {link:'app110',text:'app110'}
    ];

    $scope.setToHome = function(link, text) { 
        AppService.setHomeApp(link,text); // set to home screen
        $scope.appstore.splice(this.$index, 1); // remove from appstore
        console.log($scope.appstore);    
    }
}]);