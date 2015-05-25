Template.login.events({
    'submit form':function(e){
        e.preventDefault();

        var $target = $(e.target);

        // TODO: get phone
        var phone = $target.find('[name=phone]').val();
        if(!phone.match('^1\\d{10}$')){
            alert("输入手机号不合法");
            return ;
        }
        // TODO: get password
        var password = $target.find('[name=password]').val();

        IonLoading.show();
        Meteor.loginWithPhoneAndPassword({phone:phone}, password, function(error){
            IonLoading.hide();
            if(error){
                if(error.error == 403){
                    alert('手机号还没有注册');
                }
            }else{
                Router.go('trending');
            }
        });
    }
});