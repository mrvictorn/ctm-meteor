function requireLogin() {
  var user = Meteor.user();
  if (! user) {
      this.render('accessDenied');
      return this.stop();
    }
};

Router.map(function () {
  this.route('home', {path: '/'});
  this.route('postsList');
  this.route('items', {
    controller: 'ItemsController',
    action: 'customAction'
  });
  this.route('customerdetailsapplication', {before: requireLogin});
  this.route('notFound', { path: '*'});
});


if (Meteor.isClient) {
  Router.configure({
    layout: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
  });

  Subscriptions = {
    items: Meteor.subscribe('items')
  };

  ItemsController = RouteController.extend({
    template: 'items',

    /*
     * During rendering, wait on the items subscription and show the loading
     * template while the subscription is not ready. This can also be a function
     * that returns on subscription handle or an array of subscription handles.
     */

    waitOn: Subscriptions['items'],

    /*
     * The data function will be called after the subscrition is ready, at
     * render time.
     */

    data: function () {
      // we can return anything here, but since I don't want to use 'this' in
      // as the each parameter, I'm just returning an object here with a named
      // property.
      return {
        items: Items.find()
      };
    },

    /*
     * By default the router will call the *run* method which will render the
     * controller's template (or the template with the same name as the route)
     * to the main yield area {{yield}}. But you can provide your own action
     * methods as well.
     */
    customAction: function () {

      /* render customController into the main yield */
      this.render('items');

      /*
       * You can call render multiple times. You can even pass an object of
       * template names (keys) to render options (values). Typically, the
       * options object would include a *to* property specifiying the named
       * yield to render to.
       *
       */
      this.render({
        itemsAside: { to: 'aside', waitOn: false, data: false },
        itemsFooter: { to: 'footer', waitOn: false, data: false }
      });
    }
  });

  NotFoundController = RouteController.extend({
    template: 'notFound',
    customAction: function () {

      /* render customController into the main yield */
      // wait 3 sec
      this.render('notFound');
      Meteor.Router.to('home');
      Meteor.setTimeout(function() {
       Meteor.Router.to('home');
      }, 5 * 1000);
      
      

    }
  });

}

//