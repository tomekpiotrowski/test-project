angular.module('app')
	.controller('HomeCtrl', ['$scope', 'Users', 'Questions', '$window', '$rootScope',
		function($scope, Users, Questions, $window, $rootScope) {

			$scope.questions = Questions;

			angular.element($window).bind('resize', function() {
				$scope.$apply(function() {
					$scope.documentWidth = $window.innerWidth;
				});
			});

			$scope.documentWidth = $window.innerWidth;

			$scope.$watch('documentWidth', function(newValue) {
				if (newValue <= 767) {
					$scope.displayedColNum = 0;
				} else if (newValue >= 768 && newValue <= 991) {
					$scope.displayedColNum = 0;
				} else if (newValue >= 992) {
					$scope.displayedColNum = 4;
				}
			});

			$scope.getUser = function(index) {
				$rootScope.userIndex = index;
			};

			//search function
			$scope.searchQuery = function() {
				$scope.searchResult = $scope.searchInput || "";
			};

			//sorting functions
			$scope.sortHot = function() {
				$scope.sort = '-comments.length';
			};

			$scope.sortRecent = function() {
				$scope.sort = '-index';
			};

			$scope.radioForm = {value: "my_shelf"};
			$scope.$watch('radioForm.value', function(newValue) {
				if (newValue === "my_shelf") {
					$scope.followed = true;
				} else {
					$scope.followed = "";
				}
			});

		}]);
