angular.module('app')
	.controller('HomeCtrl', ['$scope', 'Users', 'Questions', '$window', '$rootScope',
		function($scope, Users, Questions, $window, $rootScope) {

		$scope.questions = Questions;

		angular.element($window).bind('resize', function() {
			$scope.$apply(function() {
				$scope.documentWidth = $window.innerWidth;
			});
		});

		$scope.$watch('documentWidth', function(newValue) {
			if (newValue <= 767) {
				$scope.displayedColNum = 0;
			} else if (newValue >= 768 && newValue <= 991) {
				$scope.displayedColNum = 0;
			} else if (newValue >= 992) {
				$scope.displayedColNum = 3;
			}
		});

		$scope.getUser = function(index) {
			$rootScope.userIndex = index;
		};

	}]);
