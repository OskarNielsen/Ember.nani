
Hej.OrdersController = Ember.ArrayController.extend({

    needs: "customer",
    customer: Ember.computed.alias("controllers.customer.model"),

    ordername: '',
    orderweight: '',

    actions: {
    	

    	createorder: function() {

 		

    	var	ordername = this.get('ordername');
    	var	orderweight = this.get('orderweight');

    	var order = this.store.createRecord('order', {
    		ordername : ordername,
    		orderweight : orderweight
    	});
    		this.set('ordername', '');
    		this.set('orderweight', '');


    		var customer = this.get('customer');
            var orders = customer.get('orders');
            orders.pushObject(order);
            order.save();
            customer.save();
    	}
    }
});