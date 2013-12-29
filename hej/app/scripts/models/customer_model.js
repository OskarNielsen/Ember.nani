

Hej.Customer = DS.Model.extend({
  name: DS.attr('string'),
  lastname: DS.attr('string'),

  orders: DS.hasMany('order',{async:true})
});
