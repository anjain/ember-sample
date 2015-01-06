App.MembersRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('member');
	}
});
