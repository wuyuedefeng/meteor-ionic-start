Template.senGuidePage.rendered = function() {
    IonSideMenu.snapper.disable();
};

Template.senGuidePage.destroyed = function() {
    IonSideMenu.snapper.enable();
}
Template.senGuidePage.events({
    'click [data-action=startapp]': function () {

        localStorage.setItem("senGuidePageIdentify", true);

        Router.go(SenGuidePageGlobalConfigs.startUpRouteName);
    }
});

