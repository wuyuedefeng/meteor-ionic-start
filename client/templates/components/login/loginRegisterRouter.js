Meteor.startup(function(){
    Router.route('register', {
        name: 'register'
    });

    Router.route('login', {
        name: 'login'
    });

    RegisterController = AppController.extend({});//注册
    LoginController = AppController.extend({});//登录

    //onBeforeAction
    Router.onBeforeAction(function () {
        var temName = Router.current() && Router.current().route.getName();
        if(temName && temName !== 'register'){
            if (!Meteor.userId()) {
                // if the user is not logged in, render the Login template
                this.redirect('login');
            }
        }
        this.next();
    });
});