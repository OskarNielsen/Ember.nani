


Hej.CustomersController = Ember.ArrayController.extend({
    name: '',
    lastname: '',
    
    actions: {
        create: function() {
            var name = this.get('name');
            var lastname = this.get('lastname');
            
            
            var customer = this.store.createRecord('customer', {
                name : name,
                lastname : lastname
            });

            this.set('name', '');
            this.set('lastname', '');
            
            
            customer.save();
            
        }
    }
});
