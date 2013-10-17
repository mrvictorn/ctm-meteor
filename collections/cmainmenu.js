cMainMenu = new Meteor.Collection("cmainmenu");
cMainMenu.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return UserId = 'Admin';
  }
});