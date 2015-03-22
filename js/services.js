app.factory('AppService', function() {
    var homeapps =[
        {link:'app1',text:'app1'},
        {link:'app2',text:'app2'},
        {link:'app3',text:'app3'},
        {link:'app4',text:'app4'},
        {link:'app5',text:'app5'}
    ];
    return {
        getHomeApps:function(){
            if (sessionStorage.getItem("HomeappObj") === null) {
              return homeapps;
            } else{
                return JSON.parse(sessionStorage.getItem('HomeappObj'));
            }  
        },
        setHomeApp:function(l, t){
            homeapps.push({link:l,text:t});
            sessionStorage.setItem('HomeappObj',JSON.stringify(homeapps));
        },
        deleteApp:function(index){
            delete homeapps[index];
            console.log(homeapps);
        }
    }//end return
 });