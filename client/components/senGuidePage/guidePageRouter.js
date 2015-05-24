Meteor.startup(function () {
    //customConfig
    SenGuidePageGlobalConfigs = {
        startUpRouteName: 'trending'
    };

    Router.route('/', {
        where: 'client',
        name: 'senGuidePage'
    });

    //onBeforeAction
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

});



