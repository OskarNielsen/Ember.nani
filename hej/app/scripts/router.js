


Hej.Router.map(function() {

  this.resource('customers', { path: '/customers' });

  this.resource('customer', { path: '/customers/:customer_id' },
   function() {
    this.resource('orders', { path: '/orders' });


  });

  this.resource('terms');
  this.resource('suprise');
});


