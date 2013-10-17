Template.customerdetailsapplication.events({
  'submit form': function(e) {
    e.preventDefault();
    var acontactperson ={
    //  ContactPerson{FirstName:String,MiddleName:String, LastName:String, RegisteredAddress:String, PersonalTaxNo:String, Emails {Email:String}, PhoneNumbers {PhoneNo:String}
    FirstName: $(e.target).find('[name=FirstName]').val(),
    MiddleName: $(e.target).find('[name=MiddleName]').val(),
    LastName: $(e.target).find('[name=LastName]').val(),
    };

    var customerdetailsapp = {
      ContactPerson: acontactperson
    };
    customerdetailsapp._id = cCustomerDetails.insert(customerdetailsapp);
    //Meteor.Router.to('postPage', post);
  }
});