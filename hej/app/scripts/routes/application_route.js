
Hej.HistorierRoute = Ember.Route.extend({

	model: function() {
		return this.store.find('kontakt');
	}
})

Hej.HistorienRoute = Ember.Route.extend({
   model: function(params) {
    return this.store.find('kontakt', params.post_id);
  }
});


var attr = DS.attr;

Hej.Kontakt = DS.Model.extend({
  title: DS.attr( 'string' ),
  author: DS.attr( 'string' ),
  excerpt: DS.attr( 'string' ),
  body: DS.attr( 'string' )
});





