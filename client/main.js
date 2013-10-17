Meteor.subscribe('posts');
Meteor.subscribe('cmainmenu');
Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
   },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});


