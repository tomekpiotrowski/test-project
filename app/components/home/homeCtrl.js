angular.module('app')
	.controller('HomeCtrl', ['$scope', 'Users', 'Questions', '$window', '$rootScope',
		function($scope, Users, Questions, $window, $rootScope) {

			$scope.questions = Questions;

			$scope.$watch('questions', function(newValue) {
				$scope.myQuestions = [];

				for (var i in newValue) {
					if (newValue[i].followed) {
						$scope.myQuestions.push(newValue[i]);
					}
				}
			});

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

			$scope.radioForm = { value: "all_questions" };

			$scope.$watch('radioForm.value', function(newValue) {
				var questionsNum;

				if (newValue === "my_shelf") {
					$scope.followed = true;

					questionsNum = $scope.myQuestions.length;
					$scope.questionsLimit = 3;

					if (questionsNum - 3 <= 0) {
						$scope.remaining = 0;
					} else {
						$scope.remaining = questionsNum - 3;
					}
				} else {
					$scope.followed = "";

					questionsNum = $scope.questions.length;
					$scope.questionsLimit = 3;

					if (questionsNum - 3 <= 0) {
						$scope.remaining = 0;
					} else {
						$scope.remaining = questionsNum - 3;
					}
				}
			});

			$scope.loadMore = function() {
				$scope.questionsLimit += 3;

				if ($scope.remaining - 3 <= 0) {
					$scope.remaining = 0;
				} else {
					$scope.remaining -= 3;
				}
			};

		}]);
