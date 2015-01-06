App.MembercityRoute = Ember.Route.extend({
	model: function(params) {
		if(params.city != undefined)
			return this.store.find('member', {city: params.city});
		else
			return this.store.find('member');
	}
});

