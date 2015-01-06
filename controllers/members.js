App.MembersController = Ember.ArrayController.extend({
	queryParams : ['city'],
	category: 0,
	categories: [{ id: 1, city: '​Detroit' },{ id: 2, city: '​Chicago' },{ id: 3, city: 'New Yrok' }],
});
