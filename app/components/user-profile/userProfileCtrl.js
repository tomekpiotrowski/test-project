angular.module('app')
	.controller('UserProfileCtrl', ['$scope', 'Users', '$rootScope', 'Questions',
		function($scope, Users, $rootScope, Questions) {

			$rootScope.$watch('userIndex', function(newValue) {
				$scope.user = Users[newValue];
			});

			$scope.questions = Questions;

			$scope.$watch('questions', function(newValue) {
				$scope.copiedQuestions = angular.copy(newValue);

				$scope.copiedQuestions.sort(function (a, b) {
					return b.comments.length - a.comments.length;
				});

				$scope.hottestDiscussion = $scope.copiedQuestions[0];
			});

		}]);
