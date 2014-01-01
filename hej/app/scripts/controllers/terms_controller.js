
Hej.TermsController = Ember.ArrayController.extend({
	//de tre terms er sat til false, så de ikke kan redigeres fra start af. 
	isEditingPrivat: false, 
	isEditingShop: false,
	isEditingClient: false,

	actions: {

			
		//til redigering af købsrettigheder for PRIVAT
		editPrivat: function() {
			this.set('isEditingPrivat', true);
		},

		doneEditPrivat: function() {
			this.set('isEditingPrivat', false);

			var termsPrivat = this.get('termsPrivat');

			var terms = this.store.createRecord('terms', {
    		termsPrivat : termsPrivat
    		
    	});
		terms.save();	
		},

		//til redigering af købsrettigheder for BUTIK
		editShop: function() {
			this.set('isEditingShop', true);
		},

		doneEditShop: function() {
			this.set('isEditingShop', false);

			var termsShop = this.get('termsShop');

			var terms = this.get.store('terms', {
    		termsShop : termsShop
    		
    	});
		terms.save();
		},


		editClient: function() {
			this.set('isEditingClient', true);
		},

		doneEditClient: function() {
			this.set('isEditingClient', false);

			var termsClient = this.get('termsClient');

			var terms = this.store.createRecord('terms', {
    		termsClient : termsClient
    		
    	});

		terms.save();
		}
	}

})