Meteor.startup(function () {
    //customConfig
    SenGuidePageGlobalConfigs = {
        startUpRouteName: 'login'
    };

    Router.route('/', function(){
        var guidePageIdentify = localStorage.getItem("senGuidePageIdentify");
        if(guidePageIdentify){
            this.redirect(SenGuidePageGlobalConfigs.startUpRouteName);
        }else{
            this.render('senGuidePage');
        }
    });

    //onBeforeAction
    var guidePageIdentify = localStorage.getItem("senGuidePageIdentify");
    if(!guidePageIdentify){
        Router.onBeforeAction(function () {
            var temName = Router.current() && Router.current().route.getName();
            if(temName === 'senGuidePage'){
                var guidePageIdentify = localStorage.getItem("senGuidePageIdentify");
                if(guidePageIdentify){
                    this.redirect(SenGuidePageGlobalConfigs.startUpRouteName);
                }
            }
            this.next();
        });
    }
});



