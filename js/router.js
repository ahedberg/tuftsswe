App.Router.map(function() {
	this.resource('main', {path: '/'});
	this.resource('about', {path: '/about/'});
	this.resource('board', {path: '/board/'});
	this.resource('calendar', {path: '/calendar/'});
	this.resource('corporate-relations', {path: '/corporate-relations/'});
	this.resource('contact', {path: '/contact/'});
});

App.BoardRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('board');
	}
});
