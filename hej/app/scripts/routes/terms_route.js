Hej.TermsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('terms');
	}
})