EmberNani.Router.map(function () {
 this.resource('about');
 this.resource('contact', function() {
 	this.resource('view', { path: ':view_id'});
});
});

EmberNani.ViewRoute = Ember.Route.extend({
  model: function(params) {
    return contact.findBy('id', params.view_id);
			}
    });
