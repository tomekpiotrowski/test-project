angular.module('app', ['ui.router'])
	.config(['$stateProvider', "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "app/components/home/_home.html",
				controller: "HomeCtrl"
			})
			.state('question', {
				url: "/question/:id",
				templateUrl: "app/components/single-question/_single-question.html",
				controller: "SingleQuestionCtrl"
			})
			.state('user-profile', {
				url: "/user-profile/:id",
				templateUrl: "app/components/user-profile/_user-profile.html",
				controller: "UserProfileCtrl"
			});

		$urlRouterProvider.otherwise('/home');

	}])

	.filter('positive', function() {
		return function(num) {
			return Math.abs(num);
		};
	});
