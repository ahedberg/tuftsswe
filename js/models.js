App.Board = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	year: DS.attr('int'),
	position: DS.attr('string'),
	imageUrl: DS.attr('string'),
	major: DS.attr('string'),
	secondMajor: DS.attr('string'),
	minor: DS.attr('string'),
	activities: DS.attr('string'),
	interests: DS.attr('string')
});

App.Meeting = DS.Model.extend({
	topics: DS.hasMany('topic'),
	date: DS.attr('date')
});

App.Topic = DS.Model.extend({
	subject: DS.attr('string'),
	points: DS.hasMany('point'),
	meeting: DS.belongsTo('meeting')
});

App.Point = DS.Model.extend({
	point: DS.attr('string'),
	topic: DS.belongsTo('topic')
});