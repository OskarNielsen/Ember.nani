
var attr = DS.attr;

EmberNani.Contact = DS.Model.extend ({

title: attr(),
body: attr(),
excerpt: attr()

model: function(){
		return contact;
	}
});