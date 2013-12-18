var Hej = window.Hej = Ember.Application.create();


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});



Hej.Kontakt.FIXTURES = [
  { id: '1', 
  	title: 'Hej ',
  	date: new Date('12-9-2010'),
   author: 'mememe' ,
   excerpt: 'eee',
    body: 'eeeee' },
  { 
  	id: '2', 
  	title: 'Tom' ,
  	date: new Date('12-9-2010'),
   author: 'Dale' ,
    excerpt: 'Ja, nu ved jeg nu ikke, nu bliver det ens' ,
     body: 'Og nu skal jeg også skrive her?' 
 }
];



Hej.HistorienController = Ember.ObjectController.extend({
	isEditing: false,

	
		edit: function() {
			this.set('isEditing', true);
		},
		doneEditing: function() {
			this.set('isEditing', false);
			
		}

});



