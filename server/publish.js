Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('cmainmenu', function() {
  return cMainMenu.find({isEnabled:true});
//  return cMainMenu.find();
});
Meteor.publish('customerdetails', function() {
  var currentUserId=Meteor.UserId();	
  return cCustomerDetails.find({userid: currentUserId});
//  return cMainMenu.find();
});