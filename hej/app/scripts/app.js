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



Hej.HistorienController = Ember.ObjectController.extend({
	isEditing: false,

	
		edit: function() {
			this.set('isEditing', true);
		},
		doneEditing: function() {
			this.set('isEditing', false);

		}

});



