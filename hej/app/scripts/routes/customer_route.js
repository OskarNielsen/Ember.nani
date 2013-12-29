Hej.Customer.Route = Ember.Route.extend ({
	model: function(params) {
		return this.store.find('id', params.customer_id);
	}
})