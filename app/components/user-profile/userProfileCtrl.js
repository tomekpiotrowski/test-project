angular.module('app')
	.controller('UserProfileCtrl', ['$scope', 'Users', '$rootScope',
		function($scope, Users, $rootScope) {

			$rootScope.$watch('userIndex', function(newValue) {
				$scope.user = Users[newValue];
			});

		}]);
