App.Router.map(function() {
	this.resource('main', {path: '/'});
	this.resource('about', {path: '/about/'});
	this.resource('board', {path: '/board/'});
	this.resource('calendar', {path: '/calendar/'});
	this.resource('minutes', {path: '/minutes/:year/:month'});
	this.resource('corporate-relations', {path: '/corporate-relations/'});
	this.resource('contact', {path: '/contact/'});
});

App.BoardRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('board');
	}
});

App.MinutesRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('minutes', {year: params.year, month: params.month});
	}
});
