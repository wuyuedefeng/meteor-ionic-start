Meteor.startup(function () {
    Accounts._options.sendPhoneVerificationCodeOnCreation = false;
});