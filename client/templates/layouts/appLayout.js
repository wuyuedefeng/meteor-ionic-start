Template.appLayout.rendered = function () {
  Session.set('currentTab', 'trending');
};

Template.appLayout.helpers({
    shouldShowTabs:function(){
        var temName = Router.current() && Router.current().route.getName()
        if(temName === 'trending' || temName === 'recent' || temName === 'notifications' || temName === 'profile')
            return true;
        return false;
    },
    connected: function() {
        return Meteor.status().connected;
    }
});
