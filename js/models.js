App.Board = DS.Model.extend({
	name: DS.attr('string'),
	position: DS.attr('string'),
	imageUrl: DS.attr('string'),
	major: DS.attr('string'),
	secondMajor: DS.attr('string'),
	minor: DS.attr('string'),
	activities: DS.attr('string'),
	interests: DS.attr('string')
});

App.Faculty = DS.Model.extend({
	name: DS.attr('string'),
	imageUrl: DS.attr('string'),
	bio: DS.hasMany('paragraph')
});