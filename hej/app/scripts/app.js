var Hej = window.Hej = Ember.Application.create();


/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

Hej.Story = DS.Model.extend({
    url : DS.attr('string'),
    tags : DS.attr('string'),
    fullname : DS.attr('string'),
    title : DS.attr('string'),
    excerpt : DS.attr('string'),
    submittedOn : DS.attr('date')
 
});

Hej.OpretkundeController = Ember.ObjectController.extend({
 
 actions :{
    save : function(){
        var url = $('#url').val();
        var tags = $('#tags').val();
        var fullname = $('#fullname').val();
        var title = $('#title').val();
        var excerpt = $('#excerpt').val();
        var submittedOn = new Date();
        var store = this.get('store');
        var story = store.createRecord('story',{
            url : url,
            tags : tags,
            fullname : fullname,
            title : title,
            excerpt : excerpt,
            submittedOn : submittedOn
        });
        story.save();
        this.transitionToRoute('index');
    }
 }
});


