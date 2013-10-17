Template.user_loggedout.events({
    'click #login' : loginFn
});

function loginFn(){
    Meteor.loginWithGithub({
        requestPermissions : ['user','public_repo']
    },function(err){
        if(err){
            //error handling
        }else{
            //we will create players here ;) 
        }
    });
}

Template.user_loggedin.events({
    'click #logout' : function(){
        //var username = Meteor.user().profile.login;
        Meteor.logout(function(err){
            if(err){

            }else{
                //we will do something in here with the username
            }
        });
    }
});

Template.user_loggedin.helpers({
 currentUserEmail: function() {
    return Meteor.user().emails[0].address;
  }
});