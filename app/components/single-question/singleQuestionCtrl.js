angular.module('app')
	.controller("SingleQuestionCtrl", ['$scope', 'Questions', '$rootScope', '$stateParams',
		function($scope, Questions, $rootScope, $stateParams) {

			if($stateParams.id) {
				$scope.question = Questions[$stateParams.id];
			}

			$scope.getUser = function(index) {
				$rootScope.userIndex = index;
			};

		}]);
