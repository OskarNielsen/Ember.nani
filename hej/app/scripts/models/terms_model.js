var attr = DS.attr

Hej.Terms = DS.Model.extend({
	termsPrivat: attr('string'),
	termsShop: attr('string'),
	termsClient: attr('string')
});