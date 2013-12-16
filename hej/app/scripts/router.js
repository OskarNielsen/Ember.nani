Hej.Router.map(function () {
  this.resource('omos');
  this.resource('historier', function() {

  this.resource('historien', { path: ':historien_id' });
});
});

