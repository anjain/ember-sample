App.Member = DS.Model.extend({
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	phonenumber : DS.attr('string')
});
