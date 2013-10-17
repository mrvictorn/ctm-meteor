cCustomerDetails = new Meteor.Collection('customerdetails');
cCustomerDetails.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});